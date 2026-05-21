import cloudinary from "../config/cloudinary.js";

const result = await cloudinary.uploader.upload(
  req.file.path,
  {
    folder: "japanese-platform",
  }
);

console.log(result.secure_url);