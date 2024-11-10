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
exports.dashboard = exports.Protector = exports.getComments = exports.comment = exports.chatgpt = exports.loggins = exports.loginPage = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const validator_1 = __importDefault(require("validator"));
const generative_ai_1 = require("@google/generative-ai");
const supabase_1 = __importDefault(require("../model/supabase"));
dotenv_1.default.config();
const loginPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullName, email, phoneNumber, password, date, agreed } = req.body;
    const hashed = yield bcrypt_1.default.hash(password, 10);
    const sanitzefullname = validator_1.default.escape(fullName);
    const sanitzeemail = validator_1.default.isEmail(email) ? email : null;
    const sanitzephoneNumber = (0, sanitize_html_1.default)(phoneNumber);
    const sanitzedateOfBirth = (0, sanitize_html_1.default)(date);
    try {
        if (!sanitzeemail) {
            return res.status(302).json({ message: "Invalid email format" });
        }
        const { data, error } = yield supabase_1.default
            .from("register")
            .select("*")
            .eq('email', sanitzeemail);
        if (error) {
            console.error('Error fetching users:', error);
            return res.status(400).json({ message: "Error occurred" });
        }
        else if (data.length > 0) {
            return res.status(404).json({ message: "User already exist" });
        }
        else {
            const { data, error } = yield supabase_1.default
                .from("register")
                .insert([{
                    fullname: sanitzefullname,
                    email: sanitzeemail,
                    phone: sanitzephoneNumber,
                    password: hashed,
                    date: sanitzedateOfBirth,
                    agreed: agreed,
                }]);
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Internal server error" });
            }
            else {
                console.log("Data inserted successfully");
                const transporter = nodemailer_1.default.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: `${process.env.EMAIL}`,
                        pass: `${process.env.PASSWORD}`,
                    },
                });
                //craft email message for nodemailer
                const mailOptions = {
                    from: `${process.env.EMAIL}`,
                    to: `${sanitzeemail}`, // Recipient's email
                    subject: 'Web Development Beginner Course',
                    text: 'Hello! Thanks for signing up to Web Dev Beginner Course.',
                    html: `
                                <div style="font-family: Arial, sans-serif; color: #333;">
                                    <h1 style="color: #4CAF50;">🎉 Congratulations!</h1>
                                    <p>Hi <strong>${sanitzeemail}</strong>,</p>
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
                return res.status(200).json({ redirectURL: "/courses" });
            }
        }
    }
    catch (e) {
        console.log(e);
    }
});
exports.loginPage = loginPage;
const loggins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const validateEmail = validator_1.default.isEmail(email) ? email : res.status(404).json({ message: "invalid email format" });
    try {
        const { data, error } = yield supabase_1.default
            .from("register")
            .select("*")
            .eq("email", validateEmail);
        if (error)
            throw error;
        else if (data.length > 0) {
            const extracted = data[0].password;
            const valid = yield bcrypt_1.default.compare(password, extracted, (err, result) => {
                if (err)
                    throw err;
                if (result) {
                    const token = jsonwebtoken_1.default.sign({ id: data[0].id }, `${process.env.ACCESS_TOKEN}`, { expiresIn: '1h' });
                    const refreshToken = jsonwebtoken_1.default.sign({ user: data[0].id }, `${process.env.REFRESH_TOKEN}`, { expiresIn: '1d' });
                    res.cookie('accesstoken', token, { httpOnly: true, secure: true, maxAge: 100000, sameSite: "none" }); // set to true during production
                    res.cookie('refreshtoken', refreshToken, { httpOnly: true, secure: true, maxAge: 1000000, sameSite: "none" });
                    res.status(200).json({ redirectURI: "https://web-development-flame.vercel.app/courses", message: validateEmail });
                }
                else {
                    res.status(404).json({ message: "Wrong password" });
                }
            });
        }
        else {
            res.status(500).json({ message: "User not found sign up instead" });
        }
    }
    catch (e) {
        console.log(e);
    }
});
exports.loggins = loggins;
const chatgpt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { prompt } = req.body;
    try {
        const genAI = new generative_ai_1.GoogleGenerativeAI(`${process.env.OPENAI_API_KEY}`);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = yield model.generateContent(prompt);
        let output = result.response.text().replace(/[^\w\s.:/;()"'<>?|{}[\]]/g, "");
        res.status(200).json({ outputting: output });
    }
    catch (err) {
        console.log(err);
    }
});
exports.chatgpt = chatgpt;
const comment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { comment } = req.body;
        if (comment) {
            const { data, error } = yield supabase_1.default
                .from("messages")
                .insert([
                { message: comment }
            ]);
            if (data)
                return res.status(200).json({ mess: "Comment added sucessfully" });
            else if (error) {
                return res.status(500).json({ error: "Error adding comment" });
            }
        }
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.comment = comment;
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield supabase_1.default
            .from("messages")
            .select("*");
        if (data) {
            return res.status(200).json({ data });
        }
        else {
            return res.status(401).json({ message: error });
        }
    }
    catch (err) {
        throw new Error(err);
    }
});
exports.getComments = getComments;
const Protector = (req, res) => {
    try {
        res.status(200).json({ redirectURL: "/courses" });
    }
    catch (err) {
        res.status(404).json({ redirectURL: "/user/login" });
    }
};
exports.Protector = Protector;
const dashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield supabase_1.default
            .from("register")
            .select("*");
        if (data === null || data === void 0 ? void 0 : data.length) {
            return res.status(200).json({ len: data.length });
        }
    }
    catch (error) {
        res.status(404).json({ error: error });
    }
});
exports.dashboard = dashboard;
