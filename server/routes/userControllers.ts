import express , { Request , Response}  from 'express';
import passport from "../auth/googleAuth";
import { UserProfile } from "../auth/googleAuth";
import { UserDetails } from '../auth/githubAuth';

import { loginPage , loggins , chatgpt } from "./controller";
//import loggins from "./controller";


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

  router.post("/api/openai", chatgpt)
  
export default router;