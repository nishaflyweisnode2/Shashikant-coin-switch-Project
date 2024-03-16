const auth = require("../controllers/adminController");
const express = require("express");
const router = express()


const authJwt = require("../middlewares/auth");

const { profileImage, cityImage, brandImage, referenceImage, publishAddImage, animalMelaImage, animalFeedsImage, carDocumentImage, carDlImage, kpUpload, addressPrrof, carImage, categoryImage } = require('../middlewares/imageUpload');



module.exports = (app) => {

    // api/v1/admin/

    app.post("/api/v1/admin/registration", auth.registration);
    app.post("/api/v1/admin/login", auth.signin);
    app.put("/api/v1/admin/update", [authJwt.isAdmin], auth.update);
    app.get("/api/v1/admin/profile", [authJwt.isAdmin], auth.getAllUser);
    app.get("/api/v1/admin/profile/:userId", [authJwt.isAdmin], auth.getUserById);
    app.delete('/api/v1/admin/users/profile/delete/:id', [authJwt.isAdmin], auth.deleteUser);
    app.get('/api/v1/admin/users/pending-verification', [authJwt.isAdmin], auth.getPendingVerificationUsers);
    app.put('/api/v1/admin/users/:id/update-verification-status', [authJwt.isAdmin], auth.updateVerificationStatus);
    app.get('/api/v1/admin/verified-users', [authJwt.isAdmin], auth.getVerifiedUsers);
    app.post('/api/v1/admin/notifications', [authJwt.isAdmin], auth.createNotification);
    app.get('/api/v1/admin/notifications/user/:userId', [authJwt.isAdmin], auth.getNotificationsForUser);
    app.get('/api/v1/admin/notifications/all', [authJwt.isAdmin], auth.getAllNotifications);
    app.delete('/api/v1/admin/notifications/:id', [authJwt.isAdmin], auth.deleteNotification);
    app.post('/api/v1/admin/AboutUs', [authJwt.isAdmin], auth.createAboutUs);
    app.get('/api/v1/admin/AboutUs', [authJwt.isAdmin], auth.getAllAboutUs);
    app.get('/api/v1/admin/AboutUs/:id', [authJwt.isAdmin], auth.getAboutUsById);
    app.put('/api/v1/admin/AboutUs/:id', [authJwt.isAdmin], auth.updateAboutUsById);
    app.delete('/api/v1/admin/AboutUs/:id', [authJwt.isAdmin], auth.deleteAboutUsById);
    app.post('/api/v1/admin/terms-and-conditions', [authJwt.isAdmin], auth.createTermAndCondition);
    app.get('/api/v1/admin/terms-and-conditions', [authJwt.isAdmin], auth.getAllTermAndCondition);
    app.get('/api/v1/admin/terms-and-conditions/:id', [authJwt.isAdmin], auth.getTermAndConditionById);
    app.put('/api/v1/admin/terms-and-conditions/:id', [authJwt.isAdmin], auth.updateTermAndConditionById);
    app.delete('/api/v1/admin/terms-and-conditions/:id', [authJwt.isAdmin], auth.deleteTermAndConditionById);


}