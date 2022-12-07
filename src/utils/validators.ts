const isDocument = (path: string) => {
  return path.toLowerCase().match("^.*\.(pdf)$");
};

const isAudio = (path: string) => {
  return path.toLowerCase().match("^.*\.(mp3)$");
};

const isImage = (path: string) => {
  return path.toLowerCase().match("^.*\.(jpg|gif|png|jpeg)$");
};

const isVideo = (path: string) => {
  return path.toLowerCase().match("^.*\.(mp4|webm)$");
};

export {
  isImage,
  isDocument,
  isVideo,
  isAudio,
};
