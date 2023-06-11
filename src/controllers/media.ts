import { contentPath, responseCustome, scanFolders } from "../utils/index";
import { Request, Response, NextFunction } from "express";
import { PathLike } from "node:fs";
const defaultSiglas = async (_req: Request, res: Response, _next: NextFunction) => {
  const PATH_TO_FILES: PathLike = await contentPath();
  const siglas: string[] = await scanFolders(PATH_TO_FILES.toString(),false, false, 1);
  const filteredSiglas: string[] = siglas.filter((stat: string) => stat !== "nuevos");
  if (filteredSiglas.length === 0) filteredSiglas.push("TEST");
  res.status(200).json(responseCustome("La lista de siglas", 200, filteredSiglas));
};

export { defaultSiglas };