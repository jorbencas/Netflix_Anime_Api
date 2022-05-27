import { Request, Response, NextFunction, express } from "express";
var router = express.Router();
import { postgress } from "../../db/postgres";
router.get("/pg", (req: Request, res: Response, next: NextFunction) => {
  postgress
    .query("SELECT * FROM animes")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((e) => console.error(e.stack))
    .then(() => postgress.end());
});
export default router;
