import Multer from "multer";
export const fileUpload = Multer.diskStorage({
  destination(req, file, callback) {
    if (file.mimetype === "image/jpeg") {
      callback(null, "./src/public/images");
    }
    if (file.mimetype === "image/png") {
      callback(null, "./src/public/images");
    }
    if (file.mimetype === "application/pdf") {
      callback(null, "./src/public/pdf");
    }
    if (file.mimetype === "audio/mpeg") {
      callback(null, "./src/public/audio");
    }
  },
  filename(req, file, callback) {
    const name = Math.round(Date.now() + Math.random());
    if (file.mimetype === "image/jpeg") {
      callback(null, name + ".jpg");
    }
    if (file.mimetype === "image/png") {
      callback(null, name + ".png");
    }
    if (file.mimetype === "application/pdf") {
      callback(null, name + ".pdf");
    }
    if (file.mimetype === "audio/mpeg") {
      callback(null, name + ".mp3");
    }
  },
});

export const upload = Multer({ storage: fileUpload });
