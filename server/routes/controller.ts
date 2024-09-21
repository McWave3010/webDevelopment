import { Request , Response } from "express";


/*
const homePage = (req: Request,res: Response)=>{
    res.sendFile(path.join(__dirname,"/build","index.html"));
}
*/



 const loginPage = (req: Request, res: Response)=>{
    const { fullName , email ,phoneNumber , password , dateOfBirth , agreed } = req.body;
    console.log(fullName);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
    console.log(dateOfBirth);
    console.log(agreed);
}


export default loginPage;


