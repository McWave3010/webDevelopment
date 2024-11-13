import passports, { Profile } from 'passport';
import dotenv from "dotenv";
import { Strategy as GitHubStrategy } from 'passport-github2';
import supabase from '../model/supabase';


dotenv.config();


type Id = {
    id: string | number;
}

export interface UserDetail {
    id?:Id;
    fullname?:string;
    email?:string;
    phone?:string
    password?:string;
    date?:string;
    accessToken?: string;
    agreed?: boolean;
    refreshToken?: string;
    picture?:string;
}

passports.serializeUser((user, done) => {
    done(null, user);
  });
  
  // Deserialize user from the session
  passports.deserializeUser((user:any, done) => {
    done(null, user);
  });
  
 passports.use(new GitHubStrategy({
        clientID: `${process.env.GITHUB_CLIENT_ID}`,
        clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
        callbackURL: `${process.env.GIT_CALLBACK}`,
        scope: ["user:email"]
      },
      async function(accessToken: string, refreshToken: any, profile: Profile, done: CallableFunction) {
        const picture = profile.photos?.[0].value;
        const name = profile.displayName;
        const email = profile.emails?.[0].value;

        if(supabase){
            //console.log("Database connection established successfully")
            const { data , error } = await supabase
            .from("register")
            .select("*")
            .eq("email", email)
           
                if(error) return done(error);
    
                if(data && data.length > 0){
                    const userWithToken: UserDetail = { ...data[0], accessToken , refreshToken ,picture}; // Include access token
                    return done(null, userWithToken);
                  
                }else {
                    const newUser: UserDetail = {
                        fullname: `${name}`,
                        email: `${email}`,
                        phone: '', 
                        password: '',
                        agreed: true,
                        picture:picture
                    };
                    const { data , error: PostgrestError } = await supabase
                    .from("register")
                    .insert(
                        [newUser]
                    )
                    if (error) {
                        return done(error);
                    }
                    const userWithToken: UserDetail = { ...newUser, accessToken , refreshToken , picture}; // Attach access token to the new user
                    return done(null, userWithToken);
                    }   
                    }
                } 
            )
 );


export default passports;