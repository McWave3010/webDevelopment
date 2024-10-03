import passport from 'passport';
import { Profile ,Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import supabase from "../model/supabase";

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
    agreed?: boolean;
}




passport.use(new GoogleStrategy(
    {
        clientID: `${process.env.GOOGLE_CLIENT_ID!}`,
        clientSecret: `${process.env.GOOGLE_CLIENT_SECRET!}`,
        callbackURL: `${process.env.CALLBACK_URL!}`,
       
    },
    async(accessToken: string, refreshToken: string, profile: Profile, done: Function) => {
        const email:string | undefined = profile.emails?.[0]?.value;
        const family = profile.displayName;
        if(supabase){
            //console.log("Database connection established successfully")
            const { data , error } = await supabase
            .from("register")
            .select("*")
            .eq("email", email)
           
                if(error) return done(error);
    
                if(data.length > 0){
                    const userWithToken: UserProfile = { ...data[0], accessToken }; // Include access token
                    return done(null, userWithToken);
                  
                }else {
                    const newUser: UserProfile = {
                        fullname: `${family}`,
                        email: `${email}`,
                        phone: '', 
                        password: '',
                        agreed: true, 
                    };
                    const { data , error } = await supabase
                    .from("register")
                    .insert(
                        [newUser]
                    )
                    
                        if (error) {
                            return done(error);
                        }
                        const userWithToken: UserProfile = { ...newUser, accessToken }; // Attach access token to the new user
                        return done(null, userWithToken);
                        }   
                    }
                } 
            )
        )

export default passport;
