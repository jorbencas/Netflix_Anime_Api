import { writeFile, access, readFile } from 'node:fs/promises';
// import { access, readFile } from 'node:fs/promises';
import { PathLike, existsSync } from "node:fs";
import path from "node:path";
import { doBackup } from './backup';

const saveBackupAnime = (siglas: string, primary:Object, obj: any, kind: string) => {
  let relativepath = siglas.length > 0 ? siglas+'/':'';
  const PATH_TO_FILES : PathLike = path.join(
    __dirname,
    "/../media"+ '/'+relativepath+'/.backup/'+kind+ '.json'
  );

  doBackup(PATH_TO_FILES, primary, obj);
}

export {
  saveBackupAnime
}