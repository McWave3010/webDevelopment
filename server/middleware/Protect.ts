import  { Request , Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";




dotenv.config();
const Protect = (req: Request,res: Response,next: Function)=>{
    const token = req.cookies.accesstoken;
    switch(token){
        case undefined:
            return res.status(401).json({message: "No token, authorization denied"});
            
        case null:
            return res.status(401).json({message: "No token, authorization denied"});
        
        default:
            jwt.verify(token, `${process.env.ACCESS_TOKEN}`, (err:unknown, decodedToken: any)=>{
                if(err){
                    return res.status(403).json({message: "Token is not valid, authorization denied"});
                }
                req.user = decodedToken;
                next();
            });
    }
}


export default Protect;