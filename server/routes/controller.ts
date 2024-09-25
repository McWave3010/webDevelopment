import { Request , Response } from "express";
import pool from "../model/dbConnection";
import bcrypt from "bcrypt";
import { RowDataPacket } from "mysql2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";



dotenv.config();

/*
const homePage = (req: Request,res: Response)=>{
    res.sendFile(path.join(__dirname,"/build","index.html"));
}
*/



 export const loginPage = async(req: Request, res: Response)=>{
    const { fullName , email ,phoneNumber , password , dateOfBirth , agreed } = req.body;
    const hashed = await bcrypt.hash(password , 10);
    try {
       pool.query('SELECT * FROM register WHERE email = ?', [ email ],async(err: any, results: any) => {
        if (err) {
            console.error('Error fetching users:', err);
        }else if(results.length > 0) {
            res.status(404).json({ message : "User already exist"})
        }else{
             pool.query("INSERT INTO register ( fullname , email , phone , password , date , agreed ) VALUES (?, ?, ?, ?, ?, ?)", 
                [ fullName, email, phoneNumber, hashed , dateOfBirth , agreed ? 1 : 0 ],(err,resultings)=>{
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
                            to: 'email', // Recipient's email
                            subject: 'Web dev Beginner Course',
                            text: 'Hello! Thanks for signing up to Web Dev Beginner Course.', // Plain text email body
                           
                          };
                          transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                              return console.log('Error while sending email:', error);
                            }
                            console.log('Email sent successfully:', info.response);
                          });
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
    try{
    pool.query("SELECT * FROM register WHERE email = ?",[ email ], async(err, results: RowDataPacket[])=>{
        if(err) throw err;
        else if(results.length > 0){
            const extracted = results[0].password;
            const valid = await bcrypt.compare(password, extracted, (err, result) =>{
                if(err) throw err;
                if(result){     
                    const token = jwt.sign({ email: results[0].email , fullname: results[0].fullname }, `${process.env.ACCESS_TOKEN}`, { expiresIn: '15min' });
                    res.cookie('token', token, { httpOnly: true , secure: false , maxAge: 100000 , sameSite: "none"}); // set to true during production
                    res.status(200).json({ redirectURI: "/"})
                }else{
                    res.status(404).json( {message: "Wrong password"});
                }
            });
        }else{
            res.status(500).json({ message: "User not found" });
        }
    })
}catch(e){

}
}



