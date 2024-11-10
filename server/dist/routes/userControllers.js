"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const googleAuth_1 = __importDefault(require("../auth/googleAuth"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const controller_1 = require("./controller");
const Protect_1 = __importDefault(require("../middleware/Protect"));
const RefreshToken_1 = __importDefault(require("../auth/RefreshToken"));
const supabase_1 = __importDefault(require("../model/supabase"));
const dotenv_1 = __importDefault(require("dotenv"));
const googleRefresh_1 = __importDefault(require("../auth/googleRefresh"));
const githubAccess_1 = __importDefault(require("../auth/githubAccess"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Picture_1 = __importDefault(require("../middleware/Picture"));
dotenv_1.default.config();
const insertToken = (access_token, email, picture) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield supabase_1.default
            .from("register")
            .select("*")
            .eq("email", email);
        if (error || !(data === null || data === void 0 ? void 0 : data.length)) {
            console.log("User not found:", error);
            return;
        }
        const { error: insertError } = yield supabase_1.default
            .from("register")
            .update({ refresh_token: access_token, picture: picture })
            .eq("email", email);
        if (insertError) {
            console.log("Error inserting token:", insertError);
        }
    }
    catch (err) {
        console.log(err);
    }
});
const isProduction = process.env.NODE_ENV === 'production';
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send("hello world!");
});
router.post("/register/user", controller_1.loginPage);
router.post("/login/user", controller_1.loggins);
router.get('/auth/google', googleAuth_1.default.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', googleAuth_1.default.authenticate('google', { failureRedirect: 'https://web-development-flame.vercel.app/user/login' }), (req, res) => {
    var _a, _b, _c;
    const cookieOptions = {
        maxAge: 100 * 60 * 60 * 24,
        httpOnly: true,
        secure: true, // set to true during production
        sameSite: "none"
    };
    const transporter = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.PASSWORD}`, // Use an app password if 2FA is enabled on your Google account
        },
    });
    const emailing = (_a = req.user) === null || _a === void 0 ? void 0 : _a.email;
    const mailOptions = {
        from: `${process.env.EMAIL}`,
        to: `${emailing}`, // Recipient's email
        subject: 'Web Development Beginner Course',
        text: 'Hello! Thanks for signing up to Web Dev Beginner Course.',
        html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h1 style="color: #4CAF50;">🎉 Congratulations!</h1>
            <p>Hi <strong>${emailing}</strong>,</p>
            <p>We are thrilled to welcome you to <strong>Web Development Beginner Course</strong>! 🎉</p>
            <p>Thank you for signing up with us. We're excited to have you on board and can't wait for you to experience all the amazing features we offer.</p>

            <p>If you have any questions, feel free to reply to this email. Our support team is always ready to help!</p>

            <p>Once again, welcome to <strong>Web Development Beginner Course</strong>! We look forward to being a part of your journey.</p>

            <p>Cheers,</p>
            <p><strong>Web Development Beginner Course</strong> Team</p>

            <div style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 10px;">
                <p style="font-size: 12px; color: #777;">If you didn't sign up for this account, please ignore this email.</p>
            </div>
        </div>
      `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error while sending email:', error);
        }
        console.log('Email sent successfully:', info.response);
    });
    const accessToken = (_b = req.user) === null || _b === void 0 ? void 0 : _b.accessToken;
    const picture = (_c = req.user) === null || _c === void 0 ? void 0 : _c.picture;
    switch (accessToken) {
        case accessToken:
            //insertToken(accessToken , emailing , picture);
            //
            const token = jsonwebtoken_1.default.sign({ access_token: accessToken }, `${process.env.ACCESS_TOKEN}`, { expiresIn: "1h" });
            res.cookie('accesstoken', token, cookieOptions);
            res.cookie("pic", picture, { maxAge: 100 * 60 * 60 * 24, secure: true, sameSite: "none" });
            return res.redirect("https://web-development-flame.vercel.app/courses");
        default:
            return res.redirect("https://web-development-flame.vercel.app/user/login");
    }
});
router.get('/auth/github', googleAuth_1.default.authenticate('github', { scope: ['user:email'] }));
// GitHub OAuth callback route
router.get('/auth/github/callback', googleAuth_1.default.authenticate('github', { failureRedirect: 'https://web-development-flame.vercel.app/user/login' }), (req, res) => {
    var _a, _b, _c;
    const cookieOptions = {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: true, // set to true during production
        sameSite: "none"
    };
    const transporter = nodemailer_1.default.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.PASSWORD}`, // Use an app password if 2FA is enabled on your Google account
        },
    });
    const emailings = (_a = req.user) === null || _a === void 0 ? void 0 : _a.email;
    const mailOptions = {
        from: `${process.env.EMAIL}`,
        to: `${emailings}`, // Recipient's email
        subject: 'Web Development Beginner Course',
        text: 'Hello! Thanks for signing up to Web Dev Beginner Course.',
        html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h1 style="color: #4CAF50;">🎉 Congratulations!</h1>
            <p>Hi <strong>${emailings}</strong>,</p>
            <p>We are thrilled to welcome you to <strong>Web Development Beginner Course</strong>! 🎉</p>
            <p>Thank you for signing up with us. We're excited to have you on board and can't wait for you to experience all the amazing features we offer.</p>

            <p>If you have any questions, feel free to reply to this email. Our support team is always ready to help!</p>

            <p>Once again, welcome to <strong>Web Development Beginner Course</strong>! We look forward to being a part of your journey.</p>

            <p>Cheers,</p>
            <p><strong>Web Development Beginner Course</strong> Team</p>

            <div style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 10px;">
                <p style="font-size: 12px; color: #777;">If you didn't sign up for this account, please ignore this email.</p>
            </div>
          </div>
      `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error while sending email:', error);
        }
        console.log('Email sent successfully:', info.response);
    });
    const accessTokens = (_b = req.user) === null || _b === void 0 ? void 0 : _b.accessToken;
    const picture = (_c = req.user) === null || _c === void 0 ? void 0 : _c.pictures;
    switch (accessTokens) {
        case accessTokens:
            //insertToken(accessTokens , emailings);
            const token = jsonwebtoken_1.default.sign({ access_token: accessTokens }, `${process.env.ACCESS_TOKEN}`, { expiresIn: "1h" });
            res.cookie('accesstoken', token, cookieOptions);
            res.cookie("pic", picture, { maxAge: 100 * 60 * 60 * 24, secure: true, sameSite: "none" });
            return res.redirect("https://web-development-flame.vercel.app/courses");
        default:
            return res.redirect("https://web-development-flame.vercel.app/user/login");
    }
});
router.post("/api/openai", controller_1.chatgpt);
router.post("/api/posts/comment", controller_1.comment);
router.get("/api/get/comments", controller_1.getComments);
router.get("/protected-route", Protect_1.default, controller_1.Protector);
router.get("/token", RefreshToken_1.default);
router.get("/google/provider", Protect_1.default, googleRefresh_1.default);
router.get("/github/provider", githubAccess_1.default);
router.get("/get/dashboard/details", controller_1.dashboard);
router.get("/user/pic", Picture_1.default);
exports.default = router;
