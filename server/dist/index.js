"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const userControllers_1 = __importDefault(require("./routes/userControllers"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const googleAuth_1 = __importDefault(require("./auth/googleAuth"));
const githubAuth_1 = __importDefault(require("./auth/githubAuth"));
const helmet_1 = __importDefault(require("helmet"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.static(path_1.default.join(__dirname, "/build")));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: "https://web-development-flame.vercel.app/", credentials: true, methods: 'POST , GET , PUT , DELETE', optionsSuccessStatus: 200 }));
app.use((0, express_session_1.default)({
    secret: `${process.env.SECRET_SESSION}`,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 } // 10 minutes
}));
app.use((0, cookie_parser_1.default)());
app.use((0, helmet_1.default)());
app.use(googleAuth_1.default.initialize());
app.use(googleAuth_1.default.session());
app.use(githubAuth_1.default.initialize());
app.use(googleAuth_1.default.session());
app.use("/", userControllers_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
