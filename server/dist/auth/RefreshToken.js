"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const RefreshToken = (req, res) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken || !refreshToken.includes(refreshToken)) {
        return res.sendStatus(403); // Forbidden
    }
    ;
    jsonwebtoken_1.default.verify(refreshToken, `${process.env.REFRESH_TOKEN}`, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        ;
        const accessToken = jsonwebtoken_1.default.sign({ username: user.username }, `${process.env.ACCESS_TOKEN}`, { expiresIn: '15m' });
        res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 1000000 }); // Set secure: true in production
    });
};
exports.default = RefreshToken;
