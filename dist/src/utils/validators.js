"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMusic = exports.isVideo = exports.isDocument = exports.isImage = void 0;
const isDocument = (extension) => {
    return extension.toLowerCase() == "pdf" ? true : false;
};
exports.isDocument = isDocument;
const isMusic = (extension) => {
    return extension.toLowerCase() == "mp3" ? true : false;
};
exports.isMusic = isMusic;
const isImage = (extension) => {
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
exports.isImage = isImage;
const isVideo = (extension) => {
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
exports.isVideo = isVideo;
