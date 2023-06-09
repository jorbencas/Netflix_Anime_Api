import { Router, Request, Response, NextFunction } from "express";
import {readMyFile, responseCustome, sendEmail} from "../../utils/index";
import { PathLike } from "node:fs";
import path from "node:path";
import { isLocalHost } from "../../utils/validators";
import { QueryResult } from "pg";
import { postgress } from "../../db/postgres";
var router = Router();

router.get('/createAllTables',async (req: Request, res: Response, next: NextFunction) => {

    if(!isLocalHost(req)){
        next(responseCustome('Error',400));
    }

    let sqlFile : PathLike = path.join(
        __dirname,
        '../../../docker/db/init.sql'
    );
    const CREATE_QUERY = await readMyFile(sqlFile);
    if (!CREATE_QUERY) {
        next(responseCustome('Error',400));
    }
    try {
        let r = await postgress.query(CREATE_QUERY);
        console.log(r);
        res.send(responseCustome('DOIT',200, "DOIT"));
    } catch (err) {
        next(responseCustome('Error',400));
    };    
});

router.get('/sendEmail',async (req: Request, res: Response, next: NextFunction) => {
    if(isLocalHost(req)){
        let data = await sendEmail();
        res.send(responseCustome('DOIT',200, data));
    } else {
        next(responseCustome('Error',400));
    }
});

router.get("/insertAllGeneres", async (req: Request, res: Response, next: NextFunction) => {
    if(!isLocalHost(req)){
        next(responseCustome('Error',400));
    }
    /*myQuery(`DELETE FROM filters WHERE code IS NOT NULL;`);*/
    const PATH_TO_FILES : PathLike = path.join(
        __dirname,
        "../../../docker/db/filters.json"
    );
    const content = await readMyFile(PATH_TO_FILES);
    if (!content) {
        next(responseCustome('Error',400));
    }

    let sql = "INSERT INTO filters(tittle, code, kind) VALUES";
    sql += content.map( ({ tittle, code, kind }: any) => (
        "('"+tittle+"', '"+code+"', '"+kind+"')"
    )).join(", ").concat(";");
    console.log(sql);
    postgress
    .query(sql)
    .then((r: QueryResult) => {
        console.log(r);
        res.send(responseCustome('DOIT',200, "DOIT"));
    })
    .catch((err: Error) => {
        next(responseCustome('Error',400, err.message));
    });
});
export default router; 