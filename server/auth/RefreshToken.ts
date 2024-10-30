import { Request , Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";


dotenv.config();
const RefreshToken = (req: Request, res: Response)=>{
    const { refreshToken } = req.cookies;

    if (!refreshToken || !refreshToken.includes(refreshToken)) {
        return res.sendStatus(403); // Forbidden
    };

    jwt.verify(refreshToken, `${process.env.REFRESH_TOKEN}`, (err:any, user: any) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        };
        const accessToken = jwt.sign({ username: user.username }, `${process.env.ACCESS_TOKEN}`, { expiresIn: '15m' });
        res.cookie('accessToken', accessToken, { httpOnly: true, secure: false  , sameSite: 'strict', maxAge: 1000000 }); // Set secure: true in production
        //res.json({ accessToken });
    });
}


export default RefreshToken;