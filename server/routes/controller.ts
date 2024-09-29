import { Request , Response } from "express";
import pool from "../model/dbConnection";
import bcrypt from "bcrypt";
import { RowDataPacket } from "mysql2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import sanitize from "sanitize-html";
import validator from "validator";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();



 export const loginPage = async(req: Request, res: Response)=>{
    const { fullName , email ,phoneNumber , password , dateOfBirth , agreed } = req.body;
    const hashed = await bcrypt.hash(password , 10);
    const sanitzefullname = validator.escape(fullName);
    const sanitzeemail = validator.isEmail(email) ? email : null;
    const sanitzephoneNumber = sanitize(phoneNumber);
    const sanitzedateOfBirth = sanitize(dateOfBirth);

    try {
       pool.query('SELECT * FROM register WHERE email = ?', [ email ],async(err: any, results: any) => {
        if (err) {
            console.error('Error fetching users:', err);
        }else if(results.length > 0) {
            res.status(404).json({ message : "User already exist"})
        }else{
             pool.query("INSERT INTO register ( fullname , email , phone , password , date , agreed ) VALUES (?, ?, ?, ?, ?, ?)", 
                [ sanitzefullname, sanitzeemail , sanitzephoneNumber , hashed , sanitzedateOfBirth , agreed ? 1 : 0 ],(err,resultings)=>{
                    if(err) throw err;
                    else{
                        console.log("Data inserted successfully");
                        const transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                              user: `${process.env.EMAIL}`,
                              pass: `${process.env.PASSWORD}`, // Use an app password if 2FA is enabled on your Google account
                            },
                          });

                          const mailOptions = {
                            from: "samuelamoh2005@gmail.com",
                            to: sanitzeemail, // Recipient's email
                            subject: 'Web dev Beginner Course',
                            text: 'Hello! Thanks for signing up to Web Dev Beginner Course.', // Plain text email body
                           
                          };
                          transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                              return console.log('Error while sending email:', error);
                            }
                            console.log('Email sent successfully:', info.response);
                          });

                         res.status(200).json({ redirectURL: "/login/user"})
                    }   
                }
            )  
        }});

    }catch(e: any){
        console.log(e)
    }   
}

export const loggins = (req: Request , res: Response)=>{
    const { email , password } = req.body;
    const validateEmail = validator.isEmail(email);

    try{
    pool.query("SELECT * FROM register WHERE email = ?",[ validateEmail ], async(err, results: RowDataPacket[])=>{
        if(err) throw err;
        else if(results.length > 0){
            const extracted = results[0].password;
            const valid = await bcrypt.compare(password, extracted, (err, result) =>{
                if(err) throw err;
                if(result){     
                    const token = jwt.sign({id: results[0].id }, `${process.env.ACCESS_TOKEN}`, { expiresIn: '15min' });
                    res.cookie('token', token, { httpOnly: true , secure: false , maxAge: 100000 , sameSite: "none"}); // set to true during production
                    res.status(200).json({ redirectURI: "/"})
                }else{
                    res.status(404).json( {message: "Wrong password"});
                }
            });
        }else{
            res.status(500).json({ message: "User not found sign up instead" });
        }
    })
}catch(e){

}
}


export const chatgpt = async( req: Request , res: Response)=>{
    const { prompt }: { prompt: string } = req.body;
    try{
    
    const genAI = new GoogleGenerativeAI(`${process.env.OPENAI_API_KEY}`);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    }catch(err){
        console.log(err);
    }
}
