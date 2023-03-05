import path from "node:path";
import {
  Router,
  static as staticFiles,
  Request,
  Response,
} from "express";
import { createMyStreamFile } from "../../utils";

const router = Router();

router.get("/", staticFiles(path.join(__dirname, "../../static/chat.html")));

router.get(
  "/chat-leat",
  async (_req: Request, res: Response) => {
    let fileName = path.join(
      __dirname,
      "../../static/notifications/notification.mp3"
    );
    await createMyStreamFile(fileName, res);
  }
);

router.get(
  "/notify-send",
  async (_req: Request, res: Response) => {
    let fileName = path.join(__dirname, "../../static/notifications/send.mp3");
    await createMyStreamFile(fileName, res);
  }
);

router.get(
  "/notify",
  async (_req: Request, res: Response) => {
    let fileName = path.join(
      __dirname,
      "../../static/notifications/recibe.mp3"
    );
    await createMyStreamFile(fileName, res);
  }
);

export default router;