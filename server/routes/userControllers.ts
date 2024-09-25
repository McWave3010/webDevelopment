import express , { Request , Response}  from 'express';
import passport from "../auth/googleAuth";


import { loginPage , loggins } from "./controller";
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
      res.redirect('/profile');
    }
  );

  router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

  // GitHub OAuth callback route
  router.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: 'http"//localhost:3000/user/login' }),
    (req, res) => {
      // Successful authentication, redirect to profile.
      res.redirect('/profile');
    }
  );
  
export default router;