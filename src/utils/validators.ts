const isDocument = (extension: string) => {
  return extension.toLowerCase() == "pdf" ? true : false;
};

const isMusic = (extension: string) => {
  return extension.toLowerCase() == "mp3" ? true : false;
};

const isImage = (extension: string) => {
  let valid = false;
  switch (extension.toLowerCase()) {
    case "jpg":
    case "gif":
    case "png":
    case "jpeg":
      valid = true;
      break;
    default:
      valid = false;
      break;
  }
  return valid;
};

const isVideo = (extension: string) => {
  let valid = false;
  switch (extension.toLowerCase()) {
    case "mp4":
    case "webm":
      valid = true;
      break;
    default:
      valid = false;
      break;
  }
  return valid;
};

export {
  isImage,
  isDocument,
  isVideo,
  isMusic,
};
