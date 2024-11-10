import express , { Request , Response}  from 'express';
import passport from "../auth/googleAuth";
import { UserProfile } from '../auth/googleAuth';
import { UserDetails } from '../auth/githubAuth';
import nodemailer from "nodemailer";
import { loginPage , loggins , chatgpt , comment, getComments , Protector , dashboard} from "./controller";
import Protect from '../middleware/Protect';
import RefreshToken from "../auth/RefreshToken";
import supabase from '../model/supabase';
import dotenv from "dotenv";
import GoogleRefreshToken from '../auth/googleRefresh';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import GithubVerify from '../auth/githubAccess';
import jwt from "jsonwebtoken";
import Picture from '../middleware/Picture';

dotenv.config();

interface MailOptions {
  from: string;
  to: string;
  text: string;
  subject: string;
  html:string;
}

type Cookies = {
  maxAge: number;
  sameSite: any;
  secure: boolean;
  httpOnly: boolean;
}


const insertToken = async( access_token: string | undefined ,email: string | undefined , picture?: string | undefined):Promise<void>=>{
  try{
    const { data, error} = await supabase
    .from("register")
    .select("*")
    .eq("email", email)
    if (error || !data?.length) {
      console.log("User not found:", error);
      return;
    }

    const { error: insertError } = await supabase
      .from("register")
      .update({ refresh_token: access_token , picture: picture})
      .eq("email", email);

    if (insertError) {
      console.log("Error inserting token:", insertError);
    }

  }catch(err: any){
    console.log(err);
  }
}

const isProduction = process.env.NODE_ENV === 'production';


const router = express.Router();


router.post("/register/user", loginPage);

router.post("/login/user", loggins);


router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );


router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/user/login' }),
    (req: Request, res: Response) => {
      const cookieOptions: Cookies = {
        maxAge: 100 * 60 * 60 * 24 , 
        httpOnly: true, 
        secure: false, // set to true during production
        sameSite: "strict"
    };

    const transporter: nodemailer.Transporter< SMTPTransport.SentMessageInfo , SMTPTransport.Options> = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASSWORD}`, // Use an app password if 2FA is enabled on your Google account
      },
    });

    const emailing = (req.user as UserProfile)?.email;


    const mailOptions: MailOptions = {
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
    const accessToken = (req.user as UserProfile)?.accessToken;
    const picture = (req.user as UserProfile)?.picture;
    switch(accessToken){
      case accessToken:
        //insertToken(accessToken , emailing , picture);
        //
        const token = jwt.sign({access_token: accessToken } , `${process.env.ACCESS_TOKEN}` , {expiresIn: "1h"});
        res.cookie('accesstoken', token , cookieOptions);
        res.cookie("pic", picture, { maxAge: 100 * 60 * 60 * 24 , secure: true , sameSite:"strict"})
        return res.redirect("http://localhost:3000/courses");
        
      default:
        return res.redirect("http://localhost:3000/user/login");
    }
    }
  );

  router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

  // GitHub OAuth callback route
  router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: 'http://localhost:3000/user/login' }),
    (req, res) => {

      const cookieOptions: Cookies = {
        maxAge: 1000 * 60 * 60 * 24, 
        httpOnly: true, 
        secure: true, // set to true during production
        sameSite: "none"
    };

    
    const transporter: nodemailer.Transporter< SMTPTransport.SentMessageInfo , SMTPTransport.Options> = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.PASSWORD}`, // Use an app password if 2FA is enabled on your Google account
      },
    });

    const emailings = (req.user as UserProfile)?.email;


    const mailOptions: MailOptions = {
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
    transporter.sendMail(mailOptions, (error:Error | null, info:SMTPTransport.SentMessageInfo) => {
      if (error) {
        return console.log('Error while sending email:', error);
      }
      console.log('Email sent successfully:', info.response);
    });

      const accessTokens = (req.user as UserDetails)?.accessToken;
      const picture = (req.user as UserDetails )?.pictures;
      switch(accessTokens){
        case accessTokens:
          //insertToken(accessTokens , emailings);
          const token = jwt.sign({access_token: accessTokens} , `${process.env.ACCESS_TOKEN}` , {expiresIn: "1h"});
          res.cookie('accesstoken', token , cookieOptions);
          res.cookie("pic", picture, { maxAge: 100 * 60 * 60 * 24 , secure: false , sameSite:"strict"})
          return res.redirect("http://localhost:3000/courses");
        
      default:
        return res.redirect("http://localhost:3000/user/login");
      }
      
    }
  );

  router.post("/api/openai", chatgpt);

  router.post("/api/posts/comment", comment);

  router.get("/api/get/comments" , getComments);

  router.get("/protected-route", Protect , Protector);

  router.get("/token", RefreshToken);

  router.get("/google/provider", Protect ,GoogleRefreshToken);

  router.get("/github/provider", GithubVerify);

  router.get("/get/dashboard/details" , dashboard); 

  router.get("/user/pic", Picture)
  
export default router;



