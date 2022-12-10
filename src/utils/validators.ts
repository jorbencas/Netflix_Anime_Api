import { Request } from "express";

export const isDocument = (path: string) => {
  return path.toLowerCase().match("^.*\.(pdf)$");
};

export const isAudio = (path: string) => {
  return path.toLowerCase().match("^.*\.(mp3)$");
};

export const isImage = (path: string) => {
  return path.toLowerCase().match("^.*\.(jpg|gif|png|jpeg)$");
};

export const isVideo = (path: string) => {
  return path.toLowerCase().match("^.*\.(mp4|webm)$");
};

export const isLocalHost = (req: Request) => {
  return req.headers.host?.includes("localhost");
};