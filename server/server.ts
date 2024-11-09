import express, { Application } from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import routes from "./routes/userControllers";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "./auth/googleAuth";
import git_passport from "./auth/githubAuth";
import helmet from "helmet";
import { createProxyMiddleware } from "http-proxy-middleware";


const app: Application = express();

dotenv.config();

app.use(express.static(path.join(__dirname,"/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "https://web-development-flame.vercel.app", credentials: true , methods:'POST , GET , PUT , DELETE' , optionsSuccessStatus: 200}))
app.use(session({
    secret: `${process.env.SECRET_SESSION}`,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }  // 10 minutes
 }));
app.use(cookieParser(`${process.env.SECRET_SESSION}`));
app.use(helmet())

app.use(passport.initialize());
app.use(passport.session());

app.use(git_passport.initialize());
app.use(passport.session());
app.use("/", routes)


app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
})








