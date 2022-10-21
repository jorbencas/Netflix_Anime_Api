import { Router, Request, Response, NextFunction } from "express";
import { insertAll } from "../../controllers/filters";
import isLocalHost from "../../middlewares/isLocalHost";
var router = Router();
router.put("/insertAllGeneres", (req: Request, _res: Response, next: NextFunction) => {
    if(isLocalHost(req)){
        insertAll(req,_res,next);
    }
});
export default router;