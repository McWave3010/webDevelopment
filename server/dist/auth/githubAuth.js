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
const passport_github2_1 = require("passport-github2");
const dotenv_1 = __importDefault(require("dotenv"));
const supabase_1 = __importDefault(require("../model/supabase"));
dotenv_1.default.config();
// Serialize and deserialize user
passport_1.default.serializeUser((user, done) => {
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    done(null, user);
});
// Configure GitHub Strategy
passport_1.default.use(new passport_github2_1.Strategy({
    clientID: `${process.env.GITHUB_CLIENT_ID}`,
    clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
    callbackURL: `${process.env.GIT_CALLBACK}`,
    scope: ["user:email"]
}, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const pictures = (_a = profile.photos) === null || _a === void 0 ? void 0 : _a[0].value;
        // Example logic to find or create a user
        const user = {
            githubId: profile.id,
            username: profile.username,
            displayName: profile.displayName || profile.username,
            emails: (_c = (_b = profile.emails) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value,
        };
        if (supabase_1.default) {
            const { data, error } = yield supabase_1.default
                .from("register")
                .select("*")
                .eq("email", user.emails);
            if (error)
                return done(error);
            else if (data.length > 0) {
                const userWuth = Object.assign(Object.assign({}, data[0]), { accessToken, pictures });
                return done(null, userWuth);
            }
            else {
                const newUser = {
                    fullname: `${user.displayName}`,
                    email: `${user.emails}`,
                    phone: '',
                    password: '',
                    agreed: true,
                };
                const { data, error } = yield supabase_1.default
                    .from("register")
                    .insert([newUser]);
                if (error) {
                    return done(error);
                }
                const userWithToken = Object.assign(Object.assign({}, newUser), { accessToken, pictures }); // Attach access token to the new user
                return done(null, userWithToken);
            }
        }
    }
    catch (error) {
        done(error);
    }
})));
exports.default = passport_1.default;
