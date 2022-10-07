import { writeFile, access, readFile } from 'node:fs/promises';
// import { access, readFile } from 'node:fs/promises';
import { PathLike, existsSync } from "node:fs";
import path from "node:path";

const saveBackup = (primary: any, obj: any, kind: string) => {
  const PATH_TO_FILES : PathLike = path.join(
    __dirname,
    "/../media/.backup/"+kind+ '.json'
  );
  doBackup(PATH_TO_FILES, primary, obj);
}

function doBackup(PATH_TO_FILES: PathLike, primary: any, obj: any){
  const keyPrimary = Object.keys(primary)[0];
  const valuePrimary = Object.values(primary);
  if (existsSync(PATH_TO_FILES)) {
    access(PATH_TO_FILES, 7).then(() => {
      readFile(PATH_TO_FILES).then((file: Buffer) => {
        let content = JSON.parse(file.toString("utf-8"));
        let backupFile = content.filter( (e:any) => valuePrimary.includes(e[keyPrimary]));
        if(backupFile.length > 0) {
          content.forEach((elem:any) => {
            if(valuePrimary.includes(elem[keyPrimary])){
              Object.entries(elem).forEach(([key, value]:any) => {
                if (value.length == 0 || value.toLocaleLowerCase() !== obj[key].toLocaleLowerCase()) {
                  console.log('====================================');
                  console.log(key + '===' + value);
                  console.log('====================================');
                  elem[key] = obj[key];
                }
              });
            }
          });
        } else {
          content.push(obj);
        }
        safeFile(PATH_TO_FILES,content);
      }).catch((err: Error) => {
        console.log(err);
      });
    }).catch((err: Error) => {
      console.log(err);
    });
  } else {
    safeFile(PATH_TO_FILES,[obj]);
  }
}

const safeFile = (path: string,content: Array<any>) => {
  writeFile(path,JSON.stringify(content)).then( (file) => {
      console.log('====================================');
      console.log(file);
      console.log('====================================');
  });
}

export {
  doBackup,
  saveBackup
}