import passport from 'passport';
import { Profile ,Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import db from "../model/dbConnection";
import { RowDataPacket } from 'mysql2';

dotenv.config();

passport.serializeUser((user: any, done) => {
    done(null, user);
});

passport.deserializeUser((user: any, done) => {
    done(null, user);
});


type Id = {
    id: string | number;
}
export interface UserProfile {
    id?:Id;
    fullname?:string;
    email?:string;
    phone?:string
    password?:string;
    date?:string;
    accessToken?: string;
}




passport.use(new GoogleStrategy(
    {
        clientID: `${process.env.GOOGLE_CLIENT_ID!}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET!}`,
        callbackURL: `${process.env.CALLBACK_URL!}`,
       
    },
    (accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
        const email:string | undefined = profile.emails?.[0]?.value;
        const family = profile.displayName;
        if(db){
            //console.log("Database connection established successfully")  
            db.query("SELECT * FROM register WHERE email=?",[ email ],(err: Error | null, result: RowDataPacket[]) => {
                if(err) return done(err);
    
                if(result.length > 0){
                    const userWithToken: UserProfile = { ...result[0], accessToken }; // Include access token
                    return done(null, userWithToken);
                  
                }else {
                    const newUser: UserProfile = {
                        fullname: `${family}`,
                        email: `${email}`,
                        phone: '', 
                        password: '', 
                    };
                    db.query('INSERT INTO register SET ?', newUser, (insertErr: Error | null) => {
                        if (insertErr) {
                            return done(insertErr);
                        }
                        const userWithToken: UserProfile = { ...newUser, accessToken }; // Attach access token to the new user
                        return done(null, userWithToken);
                        }
                    );
                }
            }
        )  
    }
}
    
));

export default passport;
