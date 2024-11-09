import passport from 'passport';
import { Strategy as GitHubStrategy , Profile } from 'passport-github2';
import dotenv from 'dotenv';
import supabase from "../model/supabase";

dotenv.config();

// Serialize and deserialize user
passport.serializeUser((user: Express.User, done: (err: any, id?: any) => void) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done: (err: any, user?: Express.User | false | null) => void) => {
  done(null, user);
});

type Id = {
  id?: string | number;
}

export interface UserDetails {
  id?: Id;
  fullname?: string;
  email?:string;
  phone?:string
  password?:string;
  date?:string;
  accessToken?: string;
  agreed?:boolean;
  pictures?:string;
}

// Configure GitHub Strategy
passport.use(new GitHubStrategy(
  {
    clientID: `${process.env.GITHUB_CLIENT_ID!}`,
    clientSecret: `${process.env.GITHUB_CLIENT_SECRET!}`,
    callbackURL: `${process.env.GIT_CALLBACK!}`,
    scope:["user:email"]
  },
  async (accessToken: string, refreshToken: string, profile: Profile, done: (err: any, user?: Express.User | false) => void) => {
    try {
      const pictures = profile.photos?.[0].value;
      // Example logic to find or create a user
      const user = {
        githubId: profile.id,
        username: profile.username,
        displayName: profile.displayName || profile.username,
        emails: profile.emails?.[0]?.value,
      };
      
  
      if(supabase){
        const { data , error } = await supabase
        .from("register")
        .select("*")
        .eq("email" , user.emails)
       
          if(error) return done(error);
          else if (data.length > 0) {
              const userWuth: UserDetails = {...data[0], accessToken ,pictures}
              return done(null, userWuth);
          }else {
            const newUser: UserDetails = {
              fullname: `${user.displayName}`,
              email: `${user.emails}`,
              phone: '', 
              password: '',
              agreed:true, 
          };
          const { data , error } = await supabase
          .from("register")
          .insert([newUser])
          
              if (error) {
                  return done(error);
              }
              const userWithToken: UserDetails = { ...newUser, accessToken , pictures}; // Attach access token to the new user
              return done(null, userWithToken);
              }     
        }
    } catch (error) {
      done(error);
    }
  }
)
);

export default passport;
