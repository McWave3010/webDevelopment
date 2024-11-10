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
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const dotenv_1 = __importDefault(require("dotenv"));
const supabase_1 = __importDefault(require("../model/supabase"));
dotenv_1.default.config();
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: `${process.env.CALLBACK_URL}`,
    scope: ["profile", "email"],
}, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const email = (_b = (_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value;
    const family = profile.displayName;
    const picture = (_c = profile._json) === null || _c === void 0 ? void 0 : _c.picture;
    if (supabase_1.default) {
        //console.log("Database connection established successfully")
        const { data, error } = yield supabase_1.default
            .from("register")
            .select("*")
            .eq("email", email);
        if (error)
            return done(error);
        if (data && data.length > 0) {
            const userWithToken = Object.assign(Object.assign({}, data[0]), { accessToken, refreshToken, picture }); // Include access token
            return done(null, userWithToken);
        }
        else {
            const newUser = {
                fullname: `${family}`,
                email: `${email}`,
                phone: '',
                password: '',
                agreed: true,
            };
            const { data, error: PostgrestError } = yield supabase_1.default
                .from("register")
                .insert([newUser]);
            if (error) {
                return done(error);
            }
            const userWithToken = Object.assign(Object.assign({}, newUser), { accessToken, refreshToken, picture }); // Attach access token to the new user
            return done(null, userWithToken);
        }
    }
})));
exports.default = passport_1.default;
