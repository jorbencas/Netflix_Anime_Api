import { writeFile } from 'node:fs/promises';
import { PathLike } from "node:fs";
import path from "node:path";
import { readMyFile } from '.';
import { QueryResult } from 'pg';
import { postgress } from '../db/postgres';
import { BACKUP_PATH, MEDIA_PATH } from '../config';

const saveBackup = (primary: any, obj: any, kind: string) => {
  const PATH_TO_FILES : string = BACKUP_PATH+"/"+kind;
  doBackup(PATH_TO_FILES, primary, obj);
}

async function doBackup(p: string, primary: any, obj: any){
  const PATH_TO_FILES : PathLike = path.join(
    __dirname,
    "/../"+p+ '.json'
  );
  const keyPrimary = Object.keys(primary)[0];
  const valuePrimary = Object.values(primary);
  let content = await readMyFile(PATH_TO_FILES);
  if(content){
    let backupFile = content.filter( (e:any) => valuePrimary.includes(e[keyPrimary]));
    if(backupFile.length > 0) {
      content.forEach((elem:any) => {
        if(valuePrimary.includes(elem[keyPrimary])){
          Object.entries(elem).forEach(([key, value]:any) => {
            if (value.toLocaleLowerCase() !== obj[key].toLocaleLowerCase()) {
              elem[key] = obj[key];
            }
          });
        }
      });
    } else {
      content.push(obj);
    }
  } else {
    content = [obj];
  }
  writeFile(PATH_TO_FILES,JSON.stringify(content)).then( (file) => {
    console.log('====================================');
    console.log(file);
    console.log('====================================');
  });
}
/**
 * Gestiona los backup de las series
 * @param siglas anime
 * @param primary identificador del elemento (episodes, openings, endings animes)
 * @param obj objeto con los nuevos valores
 * @param kind tipo de elemento
 * 
 */
const saveBackupAnime = (siglas: string|undefined, primary:Object, obj: any, kind: string) => {
  const PATH_TO_FILES : string = MEDIA_PATH+'/'+siglas+'/.backup'+kind;
  doBackup(PATH_TO_FILES, primary, obj);
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
