"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Protect = (req, res, next) => {
    const token = req.cookies.accesstoken;
    switch (token) {
        case undefined:
            return res.status(401).json({ message: "No token, authorization denied" });
        case null:
            return res.status(401).json({ message: "No token, authorization denied" });
        default:
            jsonwebtoken_1.default.verify(token, `${process.env.ACCESS_TOKEN}`, (err, decodedToken) => {
                if (err) {
                    return res.status(403).json({ message: "Token is not valid, authorization denied" });
                }
                req.user = decodedToken;
                next();
            });
    }
};
exports.default = Protect;
