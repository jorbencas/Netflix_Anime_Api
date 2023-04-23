import {responseCustome } from "../utils/index";
import { Request, Response, NextFunction } from "express";
import Season from "../models/Season";

const getSasion = async (req: Request, res: Response) => {
  let { id } = req.params;
  let seasionInstanced = new Season();
  seasionInstanced.setId(parseInt(id));
  let seasionSelected = await seasionInstanced.getOne();
  if(seasionSelected){
    let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    res.status(200).json(responseCustome(msg, 200, seasionInstanced));
  } else {
    let msg = `No se ha podido obtener la traducion del idioma {lang}`;
    res.status(500).json(responseCustome(msg, 500));
  }
};

const insert = async (req: Request, res: Response, _next: NextFunction) => {
  const { id, tittle, siglas } = req.body;
  let seasionInstanced = new Season();
  seasionInstanced.setId(parseInt(id));
  seasionInstanced.setTitle(tittle);
  seasionInstanced.setAnime(siglas);
  let seasionSelected = await seasionInstanced.getOne();
  if(!seasionSelected){
    let seasionEdited = await seasionInstanced.edit();
    let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    res.status(200).json(responseCustome(msg, 200, seasionInstanced));
  } else {
  let seasionInserted = await seasionInstanced.insert();
  if(seasionInserted){

  } else{
    let msg = `No se ha podido obtener la traducion del idioma {lang}`;
    res.status(500).json(responseCustome(msg, 500));
  }


  }
}

export { getSasion, insert };
