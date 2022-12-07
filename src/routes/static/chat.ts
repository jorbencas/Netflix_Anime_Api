import path from "node:path";
import {
  Router,
  static as staticFiles,
  Request,
  Response,
  NextFunction,
} from "express";
import { createMyStreamFile } from "../../utils";

const router = Router();

router.use("/", staticFiles(path.join(__dirname, "../../static/chat.html")));

router.get(
  "/chat-leat",
  async (_req: Request, res: Response, next: NextFunction) => {
    let fileName = path.join(
      __dirname,
      "../../static/notifications/notification.mp3"
    );
    await createMyStreamFile(fileName, res, next);
  }
);

router.get(
  "/notify-send",
  async (_req: Request, res: Response, next: NextFunction) => {
    let fileName = path.join(__dirname, "../../static/notifications/send.mp3");
    await createMyStreamFile(fileName, res, next);
  }
);

router.get(
  "/notify",
  async (_req: Request, res: Response, next: NextFunction) => {
    let fileName = path.join(
      __dirname,
      "../../static/notifications/recibe.mp3"
    );
    await createMyStreamFile(fileName, res, next);
  }
);

export default router;