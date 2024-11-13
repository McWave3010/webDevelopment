import { Request , Response } from "express";
import axios from 'axios';
import dotenv from "dotenv";




dotenv.config();
const SlackAuth = async(req: Request , res: Response)=>{
    const { code } = req.query;

  if (!code) {
    return res.status(400).send('Error: Missing code');
  }

  try {
    // Exchange the authorization code for an access token
    const tokenResponse = await axios.post('https://slack.com/api/oauth.v2.access', null, {
      params: {
        code,
        client_id: `${process.env.SLACK_CLIENT_ID}`,
        client_secret: `${process.env.SLACK_CLIENT_SECRET}`,
        redirect_uri: `${process.env.SLACK_CALLBACK!}`,
      },
    });

    // Check if the token exchange was successful
    if (!tokenResponse.data.ok) {
      return res.status(400).send('Error: ' + tokenResponse.data.error);
    }

    const { access_token } = tokenResponse.data;
    console.log(access_token);

    // Use the access token to get the user's Slack identity
    const userResponse = await axios.get('https://slack.com/api/users.identity', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!userResponse.data.ok) {
      return res.status(400).send('Error: ' + userResponse.data.error);
    }

    const { user } = userResponse.data;

    // Successfully authenticated and received user data
    res.json({ user });
  } catch (error) {
    console.error('Error during Slack OAuth flow:', error);
    res.status(500).send('Internal server error');
  }
}

export default SlackAuth;