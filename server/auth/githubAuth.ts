import passport from 'passport';
import { Strategy as GitHubStrategy , Profile } from 'passport-github2';
import dotenv from 'dotenv';

dotenv.config();

// Serialize and deserialize user
passport.serializeUser((user: Express.User, done: (err: any, id?: any) => void) => {
  done(null, user);
});

passport.deserializeUser((user: Express.User, done: (err: any, user?: Express.User | false | null) => void) => {
  done(null, user);
});

// Configure GitHub Strategy
passport.use(new GitHubStrategy(
  {
    clientID: `${process.env.GITHUB_CLIENT_ID!}`,
    clientSecret: `${process.env.GITHUB_CLIENT_SECRET!}`,
    callbackURL: `${process.env.GIT_CALLBACK!}`,
  },
  async (accessToken: string, refreshToken: string, profile: Profile, done: (err: any, user?: Express.User | false) => void) => {
    try {
      // Example logic to find or create a user
      const user = {
        githubId: profile.id,
        username: profile.username,
        displayName: profile.displayName || profile.username,
        emails: profile.emails?.[0].value,
      };
      console.log(user);
      console.log(accessToken);

      // Call the `done` callback with the user object
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
));

export default passport;
