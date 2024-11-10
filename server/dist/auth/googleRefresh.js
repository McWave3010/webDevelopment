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
const supabase_1 = __importDefault(require("../model/supabase"));
const verifyGithubToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { data, error } = yield supabase_1.default
        .from("register")
        .select("*")
        .eq("email", email);
    if (error) {
        return null;
    }
    else if (data === null || data === void 0 ? void 0 : data.length) {
        return (_a = data[0]) === null || _a === void 0 ? void 0 : _a.refresh_token;
    }
});
const GithubVerify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const githubAuthToken = req.cookies.google_token;
    const email = (_a = req.user) === null || _a === void 0 ? void 0 : _a.email;
    //console.log(email);
    switch (githubAuthToken) {
        case undefined:
            return res.status(401).json({ message: "No GitHub token, authorization denied" });
        case null:
            return res.status(401).json({ message: "Invalid GitHub token, authorization denied" });
        default:
            const response = yield verifyGithubToken(email);
            if (!response) {
                return res.status(403).json({ authenticated: false });
            }
            else {
                return res.status(200).json({ authenticated: true });
            }
    }
});
exports.default = GithubVerify;
