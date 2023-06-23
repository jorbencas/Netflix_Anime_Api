import { contentPath, responseCustome, scanFolders } from "../utils/index";
import { Request, Response, NextFunction } from "express";
import { MediaListFolders } from "../types/StatusCode";
import { EXCLUDE_FOLDERS_ANIME } from "../config";
const defaultSiglas = async (_req: Request, res: Response, _next: NextFunction) => {
  const PATH_TO_FILES = await contentPath();
  const rutasDirectorios: string[] = await scanFolders(PATH_TO_FILES.toString(),["nuevos"], false, 1);
//console.log(rutasDirectorios);
    let filteredSiglas: MediaListFolders[] = [];

  if (rutasDirectorios.length === 0) {
    filteredSiglas.push({ saga: '', serie: 'TEST' });
  } else {
    const carpetasIgnoradas = new Set(EXCLUDE_FOLDERS_ANIME);
    for (const rutaDirectorio of rutasDirectorios) {
      const partesRuta = rutaDirectorio.split('/').filter(part => part !== '');
      let directorio = partesRuta[partesRuta.length - 1];
      let predirectorio = partesRuta[partesRuta.length - 2];
      let carpetaSaga:MediaListFolders = { saga: '', serie: '' };    
      if (!carpetasIgnoradas.has(directorio) && !directorio.match('/*.jpg/')) {
        carpetaSaga.serie = directorio;
        carpetaSaga.saga = predirectorio;
        filteredSiglas.push(carpetaSaga);
      } else if (!filteredSiglas.some( e => e.serie.includes(predirectorio))){
        carpetaSaga.serie = predirectorio;
        filteredSiglas.push(carpetaSaga);
      }
    }
  }
  //console.log(filteredSiglas);
  console.log('====================================');
  console.log(filteredSiglas);
  console.log('====================================');
  res.status(200).json(responseCustome("La lista de siglas", 200, filteredSiglas));
};

export { defaultSiglas };


/*
Temporada 1: "The Substitute" (20 episodios)
Temporada 2: "The Entry" (21 episodios)
Temporada 3: "The Rescue" (22 episodios)
Temporada 4: "The Bount" (28 episodios)
Temporada 5: "The Assault" (18 episodios)
Temporada 6: "The Arrancar" (21 episodios)
Temporada 7: "The Hueco Mundo" (20 episodios)
Temporada 8: "The New Captain Shūsuke Amagai" (22 episodios)
Temporada 9: "The Fake Karakura Town" (24 episodios)
Temporada 10: "The Arrancar Part 2: Battle in Karakura" (24 episodios)
Temporada 11: "The Past" (18 episodios)
Temporada 12: "The Arrancar Part 3: Fierce Fight" (17 episodios)
Temporada 13: "Zanpakutō: The Alternate Tale" (26 episodios)
Temporada 14: "The Arrancar Part 4: The Invasion" (24 episodios)
Temporada 15: "Gotei 13 Invading Army" (26 episodios)
Temporada 16: "The Lost Agent" (24 episodios)

*/