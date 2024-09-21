import passport from 'passport';
import { Profile ,Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();

passport.serializeUser((user: Express.User, done) => {
    done(null, user);
});

passport.deserializeUser((user: Express.User, done: Function) => {
    done(null, user);
});

passport.use(new GoogleStrategy(
    {
        clientID: `${process.env.GOOGLE_CLIENT_ID!}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET!}`,
        callbackURL: `${process.env.CALLBACK_URL!}`,
    },
    (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
        // Logic to find or create a user in your database would go here
        //return done(null, profile);
        console.log(accessToken);
        console.log(profile);
    }
));

export default passport;
