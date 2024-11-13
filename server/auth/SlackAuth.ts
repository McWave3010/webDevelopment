import { Strategy as SlackStrategy} from "passport-slack-oauth2";
import dotenv from "dotenv";
import passportter, { Profile } from "passport";


dotenv.config();


passportter.serializeUser((user:any,done)=>{
    return done(null, user);
})

passportter.deserializeUser((user:any,done)=>{
    return done(null,user);
})

// setup the strategy using defaults 
passportter.use(new SlackStrategy({
    clientID: `${process.env.SLACK_CLIENT_ID}`,
    clientSecret: `${process.env.SLACK_CLIENT_SECRET}`,
    callbackURL: `${process.env.SLACK_CALLBACK}`,
 scope: ['identity.basic', 'identity.email', 'identity.avatar'],
}, (accessToken:string, refreshToken:string, profile: Profile, done:Function) => {

    console.log(accessToken);
    console.log(profile);
}
));


export default passportter;