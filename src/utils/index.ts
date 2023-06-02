import { Response } from "express";
import { mkdir, readdir, readFile, access } from "node:fs/promises";
import { basename, join } from "node:path";
import { createTransport } from "nodemailer";
import { KIND_VALIDS, MEDIA_PATH, OPTIONS_EMAIL } from "../config";
import statusTexts from "../static/statusCodes";
import normal from "../templates/normal/email";
import { ResponseCustomeData, StatusCode, dataResponseCustome } from "../types/StatusCode";
import { makerMail } from "./sendMail";
import { isAudio, isVideo } from "./validators";
import { PathLike, ReadStream, createReadStream, existsSync, statSync, writeFileSync } from "node:fs";

export const responseCustome = (
  message: string = "",
  code: number = 200,
  data: dataResponseCustome = null
): ResponseCustomeData => {
  const CODE_STATUS: StatusCode = statusTexts;
  const text: string = CODE_STATUS[code] ?? "";
  const response: ResponseCustomeData = {
    data,
    status: { code, text, message },
  };
  return response;
};

export const sendEmail = async (): Promise<string | Error> => {
  const subject: string = "Cosas de Anime Sending Email using Node.js";
  const text: string = "Prueba de email";
  const html: string = normal();
  const transporter = createTransport(OPTIONS_EMAIL);
  try {
    const res = await transporter.sendMail(makerMail(subject, text, html));
    console.log(res?.response);
    return "send";
  } catch (error) {
    console.error(error);
    if (typeof error === "string") {
      return new Error(error);
    } else {
      return new Error("An unknown error occurred");
    }
  }
};

export const createMyStreamFile = async (fileName: PathLike, res: Response): Promise<void> => {
  const content = await isAccessible(fileName);
  if (content) {
    let head = "text/html";
    const file_name = String(fileName);
    if (isVideo(file_name)) {
      head = "video/mp4";
    } else if (isAudio(file_name)) {
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
    const isValid = await isAccessible(PATH_TO_FILES);
    if (isValid) {
      const file = await readFile(PATH_TO_FILES, "utf-8");
      const pathString = String(PATH_TO_FILES).toLowerCase();
      content = pathString.includes(".json") ? JSON.parse(file) : file;
    }
  } catch (error) {
    console.error(error);
  }
  return content;
}

export async function readMyDir(PATH_TO_FILES: PathLike): Promise<string[]> {
  let content: string[] = [];
  try {
    const isValid = await isAccessible(PATH_TO_FILES);
    if (isValid) {
      const contentFolder = await readdir(PATH_TO_FILES, { withFileTypes: true });
      content = contentFolder.map(e => e.name);
    }
  } catch (error) {
    console.error(error);
  }
  return content;
}

export async function isAccessible(PATH_TO_FILES: PathLike): Promise<boolean> {
  let isAccessible = false;
  if (existsSync(PATH_TO_FILES)) {
    try {
      await access(PATH_TO_FILES);
      isAccessible = true;
    } catch (error) {
      console.error(error);
    }
  }
  return isAccessible;
}

export async function makeFile(pathFile: string): Promise<void> {
  const pathSplitted = pathFile.split("/");
  if (pathSplitted.length > 0) {
    let pathJoin = "";
    for (const path of pathSplitted) {
      if (/^\.[^\.]*$/.test(path)) {
        pathJoin += `/${path}`;
        await doMagicFolder(pathJoin);
      }
    }
  } else {
    await doMagicFolder(pathFile);
  }
}

async function doMagicFolder(pathFile: string) {
  const PATH_TO_FILES: PathLike = await contentPath(pathFile);
  let exists = await isAccessible(PATH_TO_FILES);
  if (!exists) {
    try {
      await mkdir(PATH_TO_FILES);
    } catch (error) {
      console.error(error);
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
  try {
    const folders = await readMyDir(pathFile);
    if (folders.length > 0) {
      for (const value of folders) {
        const rutaArchivo = join(pathFile, value);
        const stats = await statSync(rutaArchivo);
        const folder = endelement ? basename(rutaArchivo) : rutaArchivo;
        if (recursive && stats.isDirectory()) {
          try {
            const nestedFolders = await scanFolders(folder, recursive, endelement);
            scan.push(...nestedFolders);
          } catch (error) {
            console.error(error);
          }
        } else {
          scan.push(folder);
        }
      }
    }
  } catch (error) {
    console.error(error);
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
export async function handleMedia(tipo: string, name: string, ext: string, id_anime?: string | null, saga?: string | undefined, id_element?: string | null): Promise<string> {
  const nomedia = "img/no_img.jpg";
  let mediaSrc = "";
  switch (tipo) {
    case KIND_VALIDS.animebackup:
      if (saga && saga?.length > 0) {
        mediaSrc = `${saga}/`;
      }
      mediaSrc = `${mediaSrc}${id_anime}/.backup/${name}.${ext}`;
      break;
    case KIND_VALIDS.banner:
    case KIND_VALIDS.portada:
    case KIND_VALIDS.openings:
    case KIND_VALIDS.endings:
    case KIND_VALIDS.episodes:
      if (saga && saga?.length > 0) {
        mediaSrc = `${saga}/`;
      }
      mediaSrc = `${mediaSrc}${id_anime}/${tipo}/`;
      if (id_element !== undefined && id_element !== null) {
        mediaSrc = mediaSrc.concat(`${id_element}/`);
      }
      mediaSrc = mediaSrc.concat(`${name}.${ext}`);
      break;
    case KIND_VALIDS.personages:
      if (saga && saga?.length > 0) {
        mediaSrc = `${saga}/`;
      }
      mediaSrc = `${mediaSrc}${id_anime}/${tipo}/${name}/${name}.${ext}`;
      break;
    default:
      mediaSrc = nomedia;
      break;
  }
  return mediaSrc;
}

export async function contentPath(pathFile: string, kind: string | undefined = MEDIA_PATH): Promise<PathLike> {
  return join(__dirname, "../" + kind + pathFile);
}

export async function saveFile(pathFile: string, fileContents: string | any) {
  const PATH_TO_FILES: PathLike = await contentPath(pathFile);
  let exists = await isAccessible(PATH_TO_FILES);
  if (!exists) {
    try {
      const buffer: Buffer = Buffer.from(fileContents);
      await writeFileSync(PATH_TO_FILES, buffer);
    } catch (error) {
      console.error(error);
    }
  }
}
