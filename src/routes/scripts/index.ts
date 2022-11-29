import { Router, Request, Response, NextFunction } from "express";
import { postgress } from "../../db/postgres";
import { QueryResult } from "pg";
import {createTable, readMyFile} from "../../utils/index";
import { PathLike } from "node:fs";
import path from "node:path";
import isLocalHost from "../../middlewares/isLocalHost";
import { sendEmail } from "../../utils";

var router = Router();
router.get('/sendEmail',async (req: Request, res: Response, next: NextFunction) => {
    if(isLocalHost(req)){
    res.send(await sendEmail);
    } else {
         next();
    }
});
router.put("/insertAllGeneres", async (req: Request, _res: Response, next: NextFunction) => {
    if(isLocalHost(req)){
        createTable(`DROP TABLE IF EXISTS filters;`);
        createTable(`CREATE TABLE IF NOT EXISTS filters (
            tittle VARCHAR(250) NOT NULL,
            code VARCHAR(255) PRIMARY KEY,
            kind VARCHAR(255) NOT NULL,
            created timestamp DEFAULT CURRENT_TIMESTAMP,
            updated timestamp DEFAULT CURRENT_TIMESTAMP
            );`);
        const PATH_TO_FILES : PathLike = path.join(
            __dirname,
            "/../media/.backup/filters.json"
        );

        const content = await readMyFile(PATH_TO_FILES);
        if (content) {
            content.forEach( (element: any) => {
                const { tittle, code, kind } = element;
                postgress.query("INSERT INTO filters(tittle, code, kind) values($1, $2, $3)",[tittle, code, kind]).then((result: QueryResult) => {
                    console.log('====================================');
                    console.log(result);
                    console.log('====================================');
                }).catch((err: Error) => {
                    next(err);
                });
            });
        }    
    }
});
export default router;