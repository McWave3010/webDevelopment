import passport from 'passport';
import { Strategy as GitHubStrategy , Profile } from 'passport-github2';
import dotenv from 'dotenv';
import db from "../model/dbConnection";
import { RowDataPacket } from 'mysql2';

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
      // Example logic to find or create a user
      const user = {
        githubId: profile.id,
        username: profile.username,
        displayName: profile.displayName || profile.username,
        emails: profile.emails?.[0]?.value,
      };
  
      if(db){
        db.query("SELECT * FROM register WHERE email=?",[ user.emails ],(err: Error | null, result: RowDataPacket[]) => {
          if(err) return done(err);
          else if (result.length > 0) {
              const userWuth: UserDetails = {...result[0], accessToken}
              return done(null, userWuth);
          }else {
            const newUser: UserDetails = {
              fullname: `${user.displayName}`,
              email: `${user.emails}`,
              phone: '', 
              password: '', 
          };
          db.query('INSERT INTO register SET ?', newUser, (insertErr: Error | null) => {
              if (insertErr) {
                  return done(insertErr);
              }
              const userWithToken: UserDetails = { ...newUser, accessToken }; // Attach access token to the new user
              return done(null, userWithToken);
              }
            );
          }
        }
      );
    }
      // Call the `done` callback with the user object
      //done(null, user);
    } catch (error) {
      done(error);
    }
  }
)
);

export default passport;
