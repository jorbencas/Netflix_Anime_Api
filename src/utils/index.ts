import { QueryResult, QueryResultRow } from "pg";
import nodemailer from 'nodemailer';
import { Request } from 'express';
import { postgress } from "../db/postgres";
import { access, readFile, readdir } from 'node:fs/promises';
import { PathLike, existsSync, constants } from "node:fs";

const responseCustome = (message: string = "", code: number = 200, data: QueryResult<any> | object | string | Array<any> | null = null) => {
  let text: string = "";
  switch (code) {
    case 100:
      text = "Continue";
      break;
    case 101:
      text = "Switching Protocols";
      break;
    case 200:
      text = "OK";
      break;
    case 201:
      text = "Created";
      break;
    case 202:
      text = "Accepted";
      break;
    case 203:
      text = "Non-Authoritative Information";
      break;
    case 204:
      text = "No Content";
      break;
    case 205:
      text = "Reset Content";
      break;
    case 206:
      text = "Partial Content";
      break;
    case 300:
      text = "Multiple Choices";
      break;
    case 301:
      text = "Moved Permanently";
      break;
    case 302:
      text = "Moved Temporarily";
      break;
    case 303:
      text = "See Other";
      break;
    case 304:
      text = "Not Modified";
      break;
    case 305:
      text = "Use Proxy";
      break;
    case 400:
      text = "Bad Request";
      break;
    case 401:
      text = "Unauthorized";
      break;
    case 402:
      text = "Payment Required";
      break;
    case 403:
      text = "Forbidden";
      break;
    case 404:
      text = "Not Found";
      break;
    case 405:
      text = "Method Not Allowed";
      break;
    case 406:
      text = "Not Acceptable";
      break;
    case 407:
      text = "Proxy Authentication Required";
      break;
    case 408:
      text = "Request Time-out";
      break;
    case 409:
      text = "Conflict";
      break;
    case 410:
      text = "Gone";
      break;
    case 411:
      text = "Length Required";
      break;
    case 412:
      text = "Precondition Failed";
      break;
    case 413:
      text = "Request Entity Too Large";
      break;
    case 414:
      text = "Request-URI Too Large";
      break;
    case 415:
      text = "Unsupported Media Type";
      break;
    case 500:
      text = "Internal Server Error";
      break;
    case 501:
      text = "Not Implemented";
      break;
    case 502:
      text = "Bad Gateway";
      break;
    case 503:
      text = "Service Unavailable";
      break;
    case 504:
      text = "Gateway Time-out";
      break;
    case 505:
      text = "HTTP Version not supported";
      break;
    default:
      text = "";
      break;
  }

  return {
    data,
    status: { code, text, message },
  };
};

const sendEmail = () => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: `${process.env.GMAIL}`,
      pass: `${process.env.GMAIL_PASSW}`
    },
      from: process.env.GMAIL,
  });

  var mailOptions = {
    from: process.env.GMAIL,
    to: process.env.EMAIL,
    subject: 'Cosas de Anime Sending Email using Node.js',
    text:'Prueba de email',
    html: ` 
           <div> 
           <p>Hola amigo</p> 
           <p>Esto es una prueba del vídeo</p> 
           <p>¿Cómo enviar correos eletrónicos con Nodemailer en NodeJS </p> 
           </div> 
       ` 
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    transporter.close(); 
  });
}

const handleMedia = (e: QueryResultRow, siglas: string ,req: Request) => {
  e.media = req.baseUrl+'/'+e.kind+'/'+siglas+'/'+e.name+'/'+e.extension;
  delete e.kind;
  delete e.name;
  delete e.extension;
  return e;
}

const createTable = (sql: string) => {
  postgress
    .query(sql)
    .then((result: QueryResult) => {
     console.log('====================================');
     console.log(result);
     console.log('====================================');
    })
    .catch((err: Error) => {
      console.log(err);
    });
}

const updateIdAcumulative = (id: string, table: string, field: string) => {
  let num:string = id+'1';
 postgress.query(`SELECT ${field} AS id FROM ${table} WHERE ${field} = '${num}'`)
  .then((r: QueryResult) => {
    if(r.rowCount > 0) {
      let actual_id : number = parseInt(r.rows.shift().replace(/[^0-9]/ig,''));
      num = id +''+ actual_id + 1;
    }
  }).finally( () => {return num});
}

const checkTables = () => {
  postgress.query(`SELECT tablename FROM pg_catalog.pg_tables
    WHERE schemaname != 'pg_catalog' AND schemaname   'information_schema'`)
  .then((result: QueryResult) => {
    console.log('====================================');
    console.log(result.oid);
    console.log(result.rowCount);
    console.log(result.rows);
    console.log(result.fields);
    console.log(result.command);
    console.log('====================================');
  }).catch((err: Error) => {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  });
}

const dropDeleteTables = (isdrop = true) => {
  let sqlValid = isdrop ? 'DROP TABLE IF EXISTS' : 'DELETE FROM';
   postgress.query(`SELECT tablename FROM pg_catalog.pg_tables
   WHERE schemaname != 'pg_catalog' AND schemaname 'information_schema'`)
  .then((result: QueryResult) => {
    if (result.rowCount > 0) {
      result.rows.forEach((row) => {
        postgress.query(`${sqlValid} $1`, [row.tablename])
        .then((result: QueryResult) => {
          console.log(result.rows);
        }).catch((err: Error) => {
          console.log(err);
        });
      });
    } else {
      console.log('====================================');
      console.log("No hay tablas");
      console.log('====================================');
    }
  }).catch((err: Error) => {
    console.log(err);
  });
}

async function readMyFile(PATH_TO_FILES: PathLike): Promise<any | null> {
  const isValid = await isAccesible(PATH_TO_FILES);
  if (isValid) {
    try {
      const file :any = await readFile(PATH_TO_FILES, "utf-8");
      return file.toJSON();
    } catch (error) {
      console.log(error);
    }
  }
  return null;
}

async function readMyDir(PATH_TO_FILES: PathLike): Promise<string[] | null> {
  const isValid = await isAccesible(PATH_TO_FILES);
  if (isValid) {
    try {
      return await readdir(PATH_TO_FILES);;
    } catch (error) {
      console.log(error);
    }
  }
  return null;
}

async function isAccesible(PATH_TO_FILES: PathLike): Promise<boolean> {
  if (existsSync(PATH_TO_FILES)) {
    try {
      await access(PATH_TO_FILES, constants.R_OK);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  return false;
}

export {
  createTable,
  dropDeleteTables,
  checkTables,
  handleMedia,
  sendEmail,
  responseCustome,
  updateIdAcumulative,
  readMyFile,
  readMyDir
}