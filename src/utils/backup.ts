import { writeFile } from 'node:fs/promises';
import { PathLike } from "node:fs";
import path from "node:path";
import { contentPath, makeFile, readMyFile } from '.';
import { QueryResult } from 'pg';
import { postgress } from '../db/postgres';
import { BACKUP_PATH, MEDIA_PATH } from '../config';
import { estaVacio, isObject } from './validators';

const moreElements = ["media_animes", "anime_generes", "anime_temporadas", "anime_favorites", "seasions", "episodes", "seasions_episodes", "media_episodes", "clips", "episode_collections", "openings", "seasions_openings", "media_openings", "endings", "seasions_endings", "media_endings"];
const saveBackup = async (primary: any, obj: any, kind: string) => {
  const PATH_TO_FILES : PathLike = contentPath(kind+ '.json', BACKUP_PATH);
  await doBackup(PATH_TO_FILES, primary, obj, kind);
}
/**
 * Gestiona los backup de las series
 * @param saga saga a la que pertenece el anime
 * @param siglas anime
 * @param primary identificador del elemento (episodes, openings, endings animes)
 * @param obj objeto con los nuevos valores
 * @param kind tipo de elemento
 * 
 */
const saveBackupAnime = async (saga:string|undefined, siglas: string|undefined, primary:Object, obj: any, kind: string) => {
  let pathString = `${siglas}/.backup`;
  if(saga && saga?.length > 0){
    pathString = `${saga}/${pathString}`;  
  }
  const PATH_TO_FILES : PathLike = path.join(
    __dirname,
    "/../"+MEDIA_PATH+'/'+pathString
  );
  await makeFile(pathString);
  await doBackup(`${PATH_TO_FILES}/${kind}.json`, primary, obj, kind);
}
async function doBackup(PATH_TO_FILES: string, primary: Object, obj: Object, kind: string){
  let content:any = await readMyFile(PATH_TO_FILES);
  if(!estaVacio(content)){
    const keyPrimary:any = Object.keys(primary).shift();
    const valuePrimary:any = Object.values(primary).shift();
    if(isObject(content)){
      if ("media_animes".includes(kind)) {
        console.log('====================================');
        console.log(keyPrimary, valuePrimary);
        console.log('====================================');
      }
      await updateObj(obj,content, keyPrimary, valuePrimary, kind);
      if (moreElements.includes(kind)) {
        content = [content];
      }
    } else if(Array.isArray(content)){
      let exist = content.some((elem:any) => valuePrimary.includes(elem[keyPrimary]));
      if (exist) {
        console.log('====================================');
        console.log(keyPrimary, valuePrimary);
        console.log('====================================');
        content.forEach(async (elem:any) => {
          await updateObj(obj,elem, keyPrimary, valuePrimary, kind);
        });
      } else {
        content.push(obj);
      }
    }
  } else if (moreElements.includes(kind)) {
    content = [obj];
  } else {
    content = structuredClone(obj);
  }
  try {
    await writeFile(PATH_TO_FILES,JSON.stringify(content, null, 2));
  } catch (err) {
    console.log("writed: "+err);
  }
}

async function updateObj(obj:any,elem:any, keyPrimary:any, valuePrimary:any, kind:any){
  try {
    if(elem[keyPrimary] && valuePrimary.includes(elem[keyPrimary])){
      Object.entries(elem).forEach(([key, value]:any) => {
        if (value.toString().trim().toLocaleLowerCase() !== obj[key].toString().trim().toLocaleLowerCase()) {
          elem[key] = obj[key];
        }
      });
    } else {
      elem = obj;
    }
  } catch (error) {
    console.log('====================================');
    console.log(elem);
    console.log('====================================');
    console.log("error updateting:" +keyPrimary+ " " + kind + " " + error);
  } 
}

export const updateIdAcumulative = (siglas: string, table: string, field: string) => {
  let num:string = siglas+'1';
 postgress.query(`SELECT ${field} AS id FROM ${table} WHERE ${field} = ${num}`)
  .then((r: QueryResult) => {
    if(r.rowCount > 0) {
      let actual_id : number = parseInt(r.rows.shift().replace(/[^0-9]/ig,''));
      num = siglas.concat(''+(actual_id + 1));
    }
  }).finally( () => {return num});
}

export const dropDeleteTables = async (isdrop = true) => {
  console.log('====================================');
  console.log(isdrop);
  console.log('====================================');
  /*let result:QueryResult<any>|null = await myQuery(``);
  if (result && result.rowCount > 0) {
      console.log('====================================');
  // console.log(result?.oid);
  // console.log(result?.rowCount);
  // console.log(result?.rows);
  // console.log(result?.fields);
  // console.log(result?.command);
  console.log('====================================');
    let sqlAction = isdrop ? 'DROP TABLE IF EXISTS' : 'DELETE FROM';
    let sql = result?.rows?.map((r:any) => {
      return `${sqlAction} ${r.tablename};`;
    }).join("\n");
     postgress.query(sql)
    .then((result: QueryResult) => {
   console.log(result.rows);
    })
    .catch((err: Error) => {
      console.log(err);
    });

  } else {
    console.log('====================================');
    console.log("No hay tablas");
    console.log('====================================');
  }*/
}

export {
  saveBackupAnime,
  saveBackup
}