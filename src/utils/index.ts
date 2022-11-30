import { QueryResult, QueryResultRow } from "pg";
import { Request } from 'express';
import { postgress } from "../db/postgres";
import { access, readFile, readdir } from 'node:fs/promises';
import { PathLike, existsSync, constants } from "node:fs";
import { optionsEmail, makerMail } from './sendMail';
import { createTransport, SentMessageInfo } from "nodemailer";
import * as STATUS_CODE from '@static/statuscodes.json';
const responseCustome = (message: string = "", code: number = 200, data: QueryResult<any> | object | string | Array<any> | null = null) => {
  let text: string = "";
  if (STATUS_CODE[code]) {
      text = STATUS_CODE[code];
  }

  return {
    data,
    status: { code, text, message },
  };
};

const sendEmail = async () => {
   let subject:string = 'Cosas de Anime Sending Email using Node.js';
   let text:string = 'Prueba de email';
   let html:string =  ` 
      <div> 
        <p>Hola amigo</p> 
        <p>Esto es una prueba del vídeo</p> 
        <p>¿Cómo enviar correos eletrónicos con Nodemailer en NodeJS </p> 
      </div> 
    `;
    const transporter = await createTransport(optionsEmail);
    const response : string | Error = await transporter
    .sendMail(
      makerMail(subject,text,html)
    )
    .then( 
      res:string => {
        console.log(res.response);
        return 'send';
      }
    )
    .catch(error:Error => error);
    return response;
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
