import { responseCustome, scanFolders } from "../utils/index";
import { Request, Response, NextFunction } from "express";
import { PathLike } from "node:fs";
const defaultSiglas = async (_req: Request, res: Response, _next: NextFunction) => {
  const PATH_TO_FILES: PathLike = path.join(__dirname, "..", MEDIA_PATH);

  const siglas: string[] = await scanFolders(PATH_TO_FILES,false, false, 1);
  const filteredSiglas: string[] = siglas.filter((stat: string) => stat !== "nuevos");
  console.log('====================================');
  console.log(filteredSiglas);
  if (filteredSiglas.length === 0) filteredSiglas.push("TEST");
  res.status(200).json(responseCustome("La lista de siglas", 200, filteredSiglas));
};

export { defaultSiglas };