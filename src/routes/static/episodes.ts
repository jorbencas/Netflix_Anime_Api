import path from "node:path";
import { Router, Request, Response, NextFunction } from "express";
import { createMyStreamFile } from "../../utils";
import { MEDIA_PATH } from "../../config";

const router = Router();

router.get("/:anime?/:episode?/:season?", (req: Request, res: Response, next: NextFunction) => {
 
});
export default router;