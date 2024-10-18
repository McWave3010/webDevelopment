import express , { Request , Response}  from 'express';
import passport from "../auth/googleAuth";
import { UserProfile } from "../auth/googleAuth";
import { UserDetails } from '../auth/githubAuth';
import nodemailer from "nodemailer";
import { loginPage , loggins , chatgpt , comment, getComments} from "./controller";
//import loggins from "./controller";



interface MailOptions {
  from: string;
  to: string;
  text: string;
  subject: string;
}

const router = express.Router();

router.post("/register/user", loginPage);

router.post("/login/user", loggins);

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );


router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/user/login' }),
    (req: Request, res: Response) => {
      const cookieOptions = {
        maxAge: 1000 * 60 * 60 * 24, 
        httpOnly: true, 
        secure: false, // set to true during production
        
    };
    const transporter = nodemailer.createTransport({
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
      text: 'Hello! Thanks for signing up to Web Dev Beginner Course.', // Plain text email body
     
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Error while sending email:', error);
      }
      console.log('Email sent successfully:', info.response);
    });
    const accessToken = (req.user as UserProfile)?.accessToken;
    if(accessToken){
      res.cookie('authCookie', accessToken , cookieOptions);
      return res.redirect("http://localhost:3000/courses");
    }else{
      return res.redirect('http://localhost:3000/user/login');
    }
    
      
      //res.redirect('/courses');
    }
  );

  router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

  // GitHub OAuth callback route
  router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: 'http"//localhost:3000/user/login' }),
    (req, res) => {

      const cookieOptions = {
        maxAge: 1000 * 60 * 60 * 24, 
        httpOnly: true, 
        secure: false, // set to true during production
        
    };

      const accessTokens = (req.user as UserDetails)?.accessToken;
      if(accessTokens){
        res.cookie('authCookie', accessTokens , cookieOptions);
        return res.redirect("http://localhost:3000/courses");
      }else{
        return res.redirect('http://localhost:3000/user/login');
      }
      
    }
  );

  router.post("/api/openai", chatgpt);

  router.post("/api/posts/comment", comment);

  router.get("/api/get/comments" , getComments);
  
export default router;



