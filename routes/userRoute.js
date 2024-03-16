const auth = require("../controllers/userController");
const express = require("express");
const router = express()


const authJwt = require("../middlewares/auth");

const { profileImage, documentImage, kpUpload, kpUpload1 } = require('../middlewares/imageUpload');



module.exports = (app) => {

    // api/v1/user/

    app.post("/api/v1/user/loginWithPhone", auth.loginWithPhone);
    app.post("/api/v1/user/:id", auth.verifyOtp);
    app.post("/api/v1/user/resendOtp/:id", auth.resendOTP);
    app.post('/api/v1/user/socialLogin', auth.socialLogin);
    app.put("/api/v1/user/upload-profile-picture", [authJwt.verifyToken], profileImage.single('image'), auth.uploadProfilePicture);
    app.put("/api/v1/user/edit-profile", [authJwt.verifyToken], auth.editProfile);
    app.get("/api/v1/user/profile", [authJwt.verifyToken], auth.getUserProfile);
    app.get("/api/v1/user/profile/:userId", [authJwt.verifyToken], auth.getUserProfileById);
    app.put('/api/v1/user/documents', [authJwt.verifyToken], documentImage.single('image'), auth.updateDocuments);
    app.put('/api/v1/user/updateDLDetails', [authJwt.verifyToken], kpUpload, auth.updateDLDetails);
    app.put('/api/v1/user/updatepassportDetails', [authJwt.verifyToken], kpUpload1, auth.updatePassportDetails);
    app.put('/api/v1/user/notifications/:notificationId', [authJwt.verifyToken], auth.markNotificationAsRead);
    app.get('/api/v1/user/notifications/user', [authJwt.verifyToken], auth.getNotificationsForUser);
    app.get('/api/v1/user/AboutUs', [authJwt.verifyToken], auth.getAllAboutUs);
    app.get('/api/v1/user/AboutUs/:id', [authJwt.verifyToken], auth.getAboutUsById);
    app.get('/api/v1/user/terms-and-conditions', [authJwt.verifyToken], auth.getAllTermAndCondition);
    app.get('/api/v1/user/terms-and-conditions/:id', [authJwt.verifyToken], auth.getTermAndConditionById);




}