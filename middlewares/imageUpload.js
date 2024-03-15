var multer = require("multer");
require('dotenv').config()
const authConfig = require("../configs/auth.config");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
cloudinary.config({ cloud_name: authConfig.cloud_name, api_key: authConfig.api_key, api_secret: authConfig.api_secret, });



const storage = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ShashikantProject/profileImage", allowed_formats: ["jpg", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF"], }, });
const profileImage = multer({ storage: storage });
const storage3 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ShashikantProject/DocumentImage", allowed_formats: ["jpg", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF", "jiff", "JIFF", "jfif", "JFIF", "mp4", "MP4", "webm", "WEBM"], }, });
const documentImage = multer({ storage: storage3 });
const storage4 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ShashikantProject/DlImage", allowed_formats: ["jpg", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF", "jiff", "JIFF", "jfif", "JFIF", "mp4", "MP4", "webm", "WEBM"], }, });
const DlImage = multer({ storage: storage4 });
var kpUpload = DlImage.fields([
    { name: 'dlBack', maxCount: 1 },
    { name: 'dlFront', maxCount: 1 },
]);
const storage5 = new CloudinaryStorage({ cloudinary: cloudinary, params: { folder: "ShashikantProject/PassportImage", allowed_formats: ["jpg", "jpeg", "png", "PNG", "xlsx", "xls", "pdf", "PDF", "jiff", "JIFF", "jfif", "JFIF", "mp4", "MP4", "webm", "WEBM"], }, });
const PassportImage = multer({ storage: storage5 });
var kpUpload1 = PassportImage.fields([
    { name: 'passportFront', maxCount: 1 },
    { name: 'passportBack', maxCount: 1 },
]);



module.exports = { profileImage, documentImage, kpUpload, kpUpload1 }