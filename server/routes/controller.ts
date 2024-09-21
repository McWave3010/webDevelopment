import { Request , Response } from "express";
import pool from "../model/dbConnection";
import { ExecOptions } from "child_process";

/*
const homePage = (req: Request,res: Response)=>{
    res.sendFile(path.join(__dirname,"/build","index.html"));
}
*/



 const loginPage = async(req: Request, res: Response)=>{
    const { fullName , email ,phoneNumber , password , dateOfBirth , agreed } = req.body;
    console.log(fullName);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
    console.log(dateOfBirth);
    console.log(agreed);
    try {
      pool.query('SELECT COUNT(*) AS count FROM register WHERE email = ?', [ email ],(err: any, results: any) => {
        if (err) {
            console.error('Error fetching users:', err);
        
        }else if(results[0].count > 0) {
            res.status(500).json({ message : "User already exist"})
        }
        else{
            pool.query("INSERT INTO register VALUES ")
           res.status(200).json({ message : "Registrations updated successfully" })
        }});

    }catch(e){

    }
    
}


export default loginPage;


