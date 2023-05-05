import { access, mkdir, readFile, readdir } from "node:fs/promises";
import {
  PathLike,
  existsSync,
  constants,
  createReadStream,
  ReadStream,
  writeFileSync,
  readdirSync,
  Dirent,
  statSync,
} from "node:fs";
import { makerMail } from "./sendMail";
import { createTransport } from "nodemailer";
import statusTexts from "../static/statusCodes";
import {
  dataResponseCustome,
  ResponseCustomeData,
  StatusCode,
} from "../types/StatusCode";
import { Response } from "express";
import { isAudio, isVideo } from "./validators";
import { OPTIONS_EMAIL, MEDIA_PATH, KIND_VALIDS } from "../config";
import normal from "../templates/normal/email";
import path, { basename, join } from "node:path";

export const responseCustome = (
  message: string = "",
  code: number = 200,
  data: dataResponseCustome = null
): ResponseCustomeData => {
  const CODE_STATUS: StatusCode = statusTexts;
  let text: string = CODE_STATUS[code] ?? "";
  let response: ResponseCustomeData = {
    data,
    status: { code, text, message },
  };
  return response;
};

export const sendEmail = async () => {
  let subject: string = "Cosas de Anime Sending Email using Node.js";
  let text: string = "Prueba de email";
  let html: string = normal();
  const transporter = await createTransport(OPTIONS_EMAIL);
  const response: string | Error = await transporter
    .sendMail(makerMail(subject, text, html))
    .then((res) => {
      console.log(res?.response);
      return "send";
    })
    .catch((err: Error) => err);
  return response;
};

export const createMyStreamFile = async (fileName: PathLike, res: Response) => {
  let content = await isAccesible(fileName);
  if (content) {
    let head = "text/html";
    let file_name = String(fileName);
    if (isVideo(file_name)) {
      head = "video/mp4";
    }else if (isAudio(file_name)) {
      head = "audio/mp3";
    }
    res.writeHead(200, {
      "content-type": head,
      /*'Content-Disposition': `attachment; filename='${fileName}'`,*/
    });
    createReadStream(fileName).pipe(res);
  } else {
    new ReadStream();
  }
};

export async function readMyFile(PATH_TO_FILES: PathLike): Promise<any | null> {
  let content = null;
  try {
    const isValid = await isAccesible(PATH_TO_FILES);
    if (isValid) {
      const file = await readFile(PATH_TO_FILES, "utf-8");
      let pathString = String(PATH_TO_FILES).toLowerCase();
      content = pathString.includes(".json") ? JSON.parse(file) : file;
    }
  } catch (error) {
    console.log(error);
  }
  return content;
}

export async function readMyDir(
  PATH_TO_FILES: PathLike
): Promise<PathLike[] | Dirent[]> {
  let content: Dirent[] |PathLike[]= [];
  try {
    const isValid = await isAccesible(PATH_TO_FILES);
    if (isValid) {
      content = await readdirSync(PATH_TO_FILES,{ withFileTypes: true });
    }
  } catch (error) {
    console.log(error);
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

export async function makeFile(pathFile: string): Promise<void> {
if (pathFile.includes("/") || /^\.[^\.]*$/.test(pathFile)) {
  const pathSplited = pathFile.split("/");
  let pathJAOIN = "";
  for (const path of pathSplited) {
    if (/^\.[^\.]*$/.test(path)) {
      pathJAOIN += `/${path}`;
      await doMagicFolder(pathJAOIN);
    }
  }
} else {
  await doMagicFolder(pathFile);
}

  // if (pathFile.includes("/")) {
  //   let pathJAOIN = "";
  //   let pathSplited = pathFile.split("/");
  //   pathSplited.forEach(async (pathFile: string) => {
  //     if (pathFile.startsWith(".") || !pathFile.includes(".")) {
  //       pathJAOIN += `/${pathFile}`;
  //       await doMagicFolder(pathJAOIN);
  //     }
  //   });
  // } else if (pathFile.startsWith(".") || !pathFile.includes(".")) {
  //   await doMagicFolder(pathFile);
  // }
}

async function doMagicFolder(pathFile: string) {
  const PATH_TO_FILES: PathLike = contentPath(pathFile);
  let exists = await isAccesible(PATH_TO_FILES);
  if (!exists) {
    try {
      await mkdir(PATH_TO_FILES);
    } catch (error) {
      console.log(error);
    }
  }
}

/**
 * Escanea un directorio y devuelve un array de todos los archivos y carpetas en él.
 * 
 * @param {string} path El camino al directorio que quieres escanear.
 * @param {boolean} recursive true/false - si se debe escanear subcarpetas o no
 * @param {boolean} endelement Si es verdadero, la función devolverá el último elemento de la ruta.
 * 
 * @return {string[]} Un array de todos los archivos en el directorio.
 */
export async function scanFolders(pathFile: string, recursive = true, endelement = false): Promise<string[]> {
  let scan: string[] = [];
    let folders = await readMyDir(pathFile);
    if (folders.length > 0) {
      for (const value of folders) {
        const rutaArchivo = join(pathFile, value.toLocaleString());
        const stats = statSync(rutaArchivo);
        let folder = rutaArchivo.concat('/' + rutaArchivo);
        if (recursive && stats.isDirectory()) {
          try {
            let folders = await scanFolders(folder, recursive, endelement);
            scan.push(...folders);
          } catch (error) {
            console.error(error);
          }
        } else {
          if (endelement) {
            folder = basename(folder);
          }
          scan.push(folder);
        }
      }
    }
  return scan;
}

/**
 * It returns the path of a media file, if it exists, or a default image if it doesn't
 * 
 * @param tipo the type of media you want to handle.
 * @param name The name of the file.
 * @param ext The file extension of the media.
 * @param id_anime The id of the anime.
 * @param id_element This is the id of the element that you want to get the image from.
 * 
 * @return The path to the media file.
 */
export async function handleMedia(tipo: string, name: string, ext: string, id_anime?: string | null, saga?:string |undefined, id_element?: string | null): Promise<string> {
  //const nomedia = "img/no_img.jpg";
  let mediaSrc = "";
  switch (tipo) {
    case KIND_VALIDS.animebackup:
      if(saga && saga?.length > 0){
        mediaSrc = `${saga}/`;
      }
      mediaSrc = `${mediaSrc}${id_anime}/.backup/${name}.${ext}`;
      break;
    case KIND_VALIDS.banner:
    case KIND_VALIDS.portada:
    case KIND_VALIDS.openings:
    case KIND_VALIDS.endings:
    case KIND_VALIDS.episodes:
      if(saga && saga?.length > 0){
        mediaSrc = `${saga}/`;  
      }
      mediaSrc = `${mediaSrc}${id_anime}/${tipo}/`;
      if (id_element !== undefined && id_element !== null) {
        mediaSrc = mediaSrc.concat(`${id_element}/${name}.${ext}`);
      }
      break;
    case KIND_VALIDS.personages:
      if(saga && saga?.length > 0){
        mediaSrc = `${saga}/`;
      }
      mediaSrc = `${mediaSrc}${id_anime}/${tipo}/${name}/${name}.${ext}`;
      break;
    // case KIND_VALIDS.profiles:
    // case KIND_VALIDS.new_post:
    // case KIND_VALIDS.chat:
    //   mediaSrc = `${tipo}/${id_anime}/${name}.${ext}`;
    //   break;
    default:
      mediaSrc = "";
      break;
  }
  /*let exists = await isAccesible(mediaSrc);
  if (!exists) {
    mediaSrc = nomedia;
  }*/
  return mediaSrc;
}

export function contentPath(
  pathFile: string,
  kind: string | undefined = MEDIA_PATH
): PathLike {
  //no es correcto hacer ell ../ (se debe hacer de forma recursiva, independiente mente desde donde se invoque la función)
  const absPath = path.resolve(__dirname, '..'+ kind);
  return path.relative(process.cwd(), path.join(absPath, pathFile));
}

export async function saveFile(pathFile: string, fileContents: string | any) {
  const PATH_TO_FILES: PathLike = contentPath(pathFile);
  let exists = await isAccesible(PATH_TO_FILES);
  if (!exists) {
    try {
      const buffer: Buffer = Buffer.from(fileContents);
      await writeFileSync(PATH_TO_FILES, buffer);
    } catch (error) {
      console.log(error);
    }
  }
}
