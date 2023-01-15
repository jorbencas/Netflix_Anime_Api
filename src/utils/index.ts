import { QueryResult, QueryResultRow } from "pg";
import { NextFunction, Request } from 'express';
import { postgress } from "../db/postgres";
import { access, readFile, readdir } from 'node:fs/promises';
import { PathLike, existsSync, constants, createReadStream } from "node:fs";
import { makerMail } from './sendMail';
import { createTransport } from "nodemailer";
import statusTexts from '../static/statusCodes';
import { dataResponseCustome, ResponseCustomeData, StatusCode } from "../types/StatusCode";
import { Response } from 'express';
import { isAudio, isVideo } from "./validators";
import { OPTIONS_EMAIL } from "../config";
import normal from '../templates/normal/email';

export const responseCustome = (message: string = "", code: number = 200, data: dataResponseCustome = null) => {
  const CODESTATUS:StatusCode = statusTexts;
  let text: string = CODESTATUS[code] ?? "";
  let response: ResponseCustomeData = {
    data,
    status: { code, text, message },
  };
  return response;
};

export const sendEmail = async () => {
  let subject:string = 'Cosas de Anime Sending Email using Node.js';
  let text:string = 'Prueba de email';
  let html:string = normal();
  const transporter = await createTransport(OPTIONS_EMAIL);
  const response : string | Error = await transporter
  .sendMail(
    makerMail(subject,text,html)
  )
  .then( 
    res => {
      console.log(res?.response);
      return 'send';
    }
  )
  .catch((err:Error) => err);
  return response;
}

export const handleMedia = (result: QueryResult, siglas: string ,req: Request) => {
  if (result.rows.length > 0) {
    let conditional = siglas+'/';
    let properties = ['kind', 'name', 'extension'];
    return result.rows.map( (e: QueryResultRow) => {
      if (Object.prototype.hasOwnProperty.call(e,"seasion")) {
        conditional += e.seasion+ '/';
      }
      e.media = req.baseUrl+'/'+e.kind+'/'+conditional+e.name+'/'+e.extension;
      properties.forEach((property) => {
        if (Object.prototype.hasOwnProperty.call(e,property)) {
          delete e[property];
        }
      });
    });
  } else return result;
}

export const createMyStreamFile = async (fileName:PathLike, res: Response, next: NextFunction) => {
  let content = await isAccesible(fileName);
  if (content) {
    let head = "text/html";
    if(isVideo(String(fileName))){
      head = "video/mp4";
    } else if(isAudio(String(fileName)) ){
      head = "audio/mp3";
    }
    res.writeHead(200, { "content-type":  head});
    createReadStream(fileName).pipe(res);
  } else {
    next(new Error("File not found"));
  } 
}

export const myQuery = (sql: string) => {
  let result = null;
  postgress
  .query(sql)
  .then((r: QueryResult) => {
    result = r;
  })
  .catch((err: Error) => {
    console.log(err);
    result = err;
  });
  return result;
}

export async function readMyFile(PATH_TO_FILES: PathLike): Promise<any | null> {
  let content = null;
  const isValid = await isAccesible(PATH_TO_FILES);
  if (isValid) {
    try {
      const file = await readFile(PATH_TO_FILES, "utf-8");
      let pathString = String(PATH_TO_FILES).toLowerCase();
      content = pathString.includes('.json') ? JSON.parse(file) : file;
    } catch (error) {
      console.log(error);
    }
  }
  return content;
}

export async function readMyDir(PATH_TO_FILES: PathLike): Promise<string[] | null> {
  let content = null;
  const isValid = await isAccesible(PATH_TO_FILES);
  if (isValid) {
    try {
      content = await readdir(PATH_TO_FILES);;
    } catch (error) {
      console.log(error);
    }
  }
  return content;
}

async function isAccesible(PATH_TO_FILES: PathLike): Promise<boolean> {
  let isAccesible = false;
  if (existsSync(PATH_TO_FILES)) {
    try {
      await access(PATH_TO_FILES, constants.R_OK);
      isAccesible = true;
    } catch (error) {
      console.log(error);
    }
  }
  return isAccesible;
}