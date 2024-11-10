import { Request , Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import sanitize from "sanitize-html";
import validator from "validator";
import { GoogleGenerativeAI } from "@google/generative-ai";
import supabase from "../model/supabase";


dotenv.config();
type Users = {
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    date: string;
    agreed:boolean;
}
interface MailOptions {
    from: string;
    to: string;
    text?: string;
    subject: string;
    html?:string;
}
 export const loginPage = async(req: Request, res: Response): Promise<any>=>{
    const { fullName , email ,phoneNumber , password , date , agreed }:Users = req.body;
    const hashed = await bcrypt.hash(password , 10);
    const sanitzefullname = validator.escape(fullName);
    const sanitzeemail = validator.isEmail(email) ? email : null;
    const sanitzephoneNumber = sanitize(phoneNumber);
    const sanitzedateOfBirth = sanitize(date);

    try {
        if (!sanitzeemail){
            return res.status(302).json({ message: "Invalid email format"})
        }
        const { data , error } = await supabase
        .from("register")
        .select("*")
        .eq('email', sanitzeemail)
      
        if (error) {
            console.error('Error fetching users:', error);
            return res.status(400).json({ message: "Error occurred" });
        }else if(data.length > 0) {
            return res.status(404).json({ message : "User already exist"})
        }else{
            const { data , error } = await supabase
            .from("register")
            .insert([{
                fullname: sanitzefullname,
                email: sanitzeemail,
                phone: sanitzephoneNumber,
                password: hashed,
                date: sanitzedateOfBirth,
                agreed: agreed,
 
            }])
            if(error){
                console.log(error)
                return res.status(500).json({ message: "Internal server error" });
                    }
                    else {
                        console.log("Data inserted successfully");
                        const transporter = nodemailer.createTransport({
                            host: 'smtp.gmail.com',
                            port: 465,
                            secure: true, 
                            auth: {
                              user: `${process.env.EMAIL}`,
                              pass: `${process.env.PASSWORD}`, 
                            },
                          });
                          //craft email message for nodemailer
                          const mailOptions: MailOptions = {
                            from: `${process.env.EMAIL}`,
                            to: `${sanitzeemail}`, // Recipient's email
                            subject: 'Web Development Beginner Course',
                            text: 'Hello! Thanks for signing up to Web Dev Beginner Course.',
                            html:`
                                <div style="font-family: Arial, sans-serif; color: #333;">
                                    <h1 style="color: #4CAF50;">🎉 Congratulations!</h1>
                                    <p>Hi <strong>${sanitzeemail}</strong>,</p>
                                    <p>We are thrilled to welcome you to <strong>Web Development Beginner Course</strong>! 🎉</p>
                                    <p>Thank you for signing up with us. We're excited to have you on board and can't wait for you to experience all the amazing features we offer.</p>

                                    <p>If you have any questions, feel free to reply to this email. Our support team is always ready to help!</p>

                                    <p>Once again, welcome to <strong>Web Development Beginner Course</strong>! We look forward to being a part of your journey.</p>

                                    <p>Cheers,</p>
                                    <p><strong>Web Development Beginner Course</strong> Team</p>

                                    <div style="margin-top: 20px; border-top: 1px solid #ccc; padding-top: 10px;">
                                        <p style="font-size: 12px; color: #777;">If you didn't sign up for this account, please ignore this email.</p>
                                    </div>
                                </div>
                            `
                          };
                          transporter.sendMail(mailOptions, (error, info) => {
                            if (error) {
                              return console.log('Error while sending email:', error);
                            }
                            console.log('Email sent successfully:', info.response);
                          });
                         return res.status(200).json({ redirectURL: "/courses"});
                    }   
                }
    }catch(e: any){
        console.log(e)
    }   
}
interface User {
    email:string;
    password:string;
}
export const loggins = async(req: Request , res: Response)=>{
    const { email , password }: User = req.body;
    const validateEmail = validator.isEmail(email) ? email : res.status(404).json({ message: "invalid email format" });

    try{
        const { data , error } = await supabase
        .from("register")
        .select("*")
        .eq("email" , validateEmail);
        if(error) throw error;
        else if(data.length > 0){
            const extracted = data[0].password;
            const valid = await bcrypt.compare(password, extracted, (err, result) =>{
                if(err) throw err;
                if(result){     
                    const token = jwt.sign({id: data[0].id }, `${process.env.ACCESS_TOKEN}`, { expiresIn: '1h' });
                    const refreshToken = jwt.sign({user: data[0].id}, `${process.env.REFRESH_TOKEN!}`, { expiresIn: '1d' });
                    res.cookie('accesstoken', token, { httpOnly: true , secure: false , maxAge: 100000 , sameSite: "strict"}); // set to true during production
                    res.cookie('refreshtoken', refreshToken, { httpOnly: true , secure: false , maxAge: 1000000 , sameSite: "strict"});
                    res.status(200).json({ redirectURI: "/courses" , message: validateEmail });
                }else{
                    res.status(404).json( {message: "Wrong password"});
                }
            });
        }else{
            res.status(500).json({ message: "User not found sign up instead" });
        }
}catch(e: any){
    console.log(e);
}
}


export const chatgpt = async( req: Request , res: Response)=>{
    const { prompt }:{ prompt: string } = req.body;
    try{
    const genAI = new GoogleGenerativeAI(`${process.env.OPENAI_API_KEY}`);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    let output = result.response.text().replace(/[^\w\s.:/;()"'<>?|{}[\]]/g,"");
    res.status(200).json({ outputting: output});
    }catch(err){
        console.log(err);
    }
}

export const comment = async(req:Request , res: Response)=>{
    try{
        const { comment }:{comment?:object}= req.body;
        if(comment){
            const { data , error} = await supabase
            .from("messages")
            .insert([
                { message: comment }
                ])
            if(data)return res.status(200).json({ mess: "Comment added sucessfully" });  
            else if (error){
                return res.status(500).json({ error: "Error adding comment" });
            }
        }
    }catch(err: any){
       throw new Error(err);
    }
   
}

export const getComments = async(req: Request, res: Response)=>{
    try{
        const { data , error } = await supabase
        .from("messages")
        .select("*")
        if(data){
            return res.status(200).json({ data });
        }else{
            return res.status(401).json({ message: error });
        }
    }catch(err: any){
       throw new Error(err);
    }
}
export const Protector = (req: Request , res: Response )=>{
    try{
        res.status(200).json({ redirectURL: "/courses" });
    }catch(err: any){
        res.status(404).json({ redirectURL: "/user/login"});
    }
     
}

export const dashboard = async(req: Request , res: Response)=>{
    try{
        const { data , error } = await supabase
        .from("register")
        .select("*")
        if(data?.length){
           return res.status(200).json({ len: data.length }) 
        }
       
    }catch(error:any){
        res.status(404).json({ error: error });
    }
}