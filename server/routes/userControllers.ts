import express , { Request , Response}  from 'express';
import passport from "../auth/googleAuth";


import loginPage from "./controller";
const router = express.Router();

router.post("/register/user", loginPage);

router.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );


router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
    (req: Request, res: Response) => {
      res.redirect('/profile');
    }
  );
export default router;