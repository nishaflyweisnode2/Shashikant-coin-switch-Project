const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    bio: {
        type: String,
    },
    occupation: {
        type: String,
    },
    otp: {
        type: String,
    },
    otpExpiration: {
        type: Date,
    },
    accountVerification: {
        type: Boolean,
        default: false
    },
    completeProfile: {
        type: Boolean,
        default: false,
    },
    currentLocation: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        },
    },
    state: {
        type: String
    },
    isState: {
        type: String,
        default: false
    },
    city: {
        type: String
    },
    isCity: {
        type: String,
        default: false
    },
    userType: {
        type: String,
        enum: ["ADMIN", "USER", "PARTNER"],
        default: "USER"
    },
    refferalCode: {
        type: String,
    },
    referredBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    }],
    referredTo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    }],
    wallet: {
        type: Number,
        default: 0,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    socialType: {
        type: String,
    },
    documentCountry: {
        type: String,
    },
    idCardText: {
        type: String,
    },
    idCard: {
        type: String,
    },
    isIdCardUpload: {
        type: Boolean,
        default: false
    },
    dlNumber: {
        type: String,
    },
    dlFront: {
        type: String,
    },
    dlBack: {
        type: String,
    },
    isDlUpload: {
        type: Boolean,
        default: false
    },
    passportNumber: {
        type: String,
    },
    passportFront: {
        type: String,
    },
    passportBack: {
        type: String,
    },
    isPassportUpload: {
        type: Boolean,
        default: false
    },
    review: {
        type: String,
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
