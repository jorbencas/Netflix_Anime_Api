const isImage = (extension) => {
  let valid = false;
  extension = extension.toLowerCase();
  switch (extension) {
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

const isDocument = (extension) => {
  extension = extension.toLowerCase();
  switch (extension) {
    case "pdf":
      valid = true;
      break;
    default:
      valid = false;
      break;
  }
  return valid;
};

const isVideo = (extension) => {
  let extension = extension.toLowerCase();
  switch (extension) {
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

const isMusic = (extension) => {
  let valid = false;
  extension = extension.toLowerCase();
  if (extension == "mp3") {
    valid = true;
  }
  return valid;
};

module.exports = {
  isImage,
  isDocument,
  isVideo,
  isMusic,
};
