import { Request , Response } from "express";

const Picture = (req: Request , res: Response)=>{
    const pic = req.cookies.pic;
    if(!pic){
        return res.status(404).json({message: "No picture found"});
    }else{
        return res.status(200).json({picture: pic});
    }
}

export default Picture;