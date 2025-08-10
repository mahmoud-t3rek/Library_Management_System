import userModel from "../DB/models/user.model.js";
import { varifyToken } from "../Utlits/Token/verfiyToken.js";

export const authentication=async(req,res,next)=>{
    const { authorization } = req.headers;
    if(!authorization){
        throw new Error("Token not found", { cause: 400 });
    }
    const [prefix, token] = authorization.split(" ");
    if (!prefix || !token) {
      throw new Error("Invalid Authorization header format", { cause: 400 });
    }
     let signature = "";

    if (prefix.toLowerCase() == "bearer") {
      signature = process.env.ACCSESS_TOKENUSER;
    } else if (prefix.toLowerCase() == "admin") {
      signature = process.env.ACCSESS_TOKENADMIN;
    }else{
       throw new Error("Prefix must be bearer or admin", { cause: 400 });
    }

    const decoded = await varifyToken(token, signature);
    if(!decoded){
        throw new Error("Invalid token", { cause: 400});
    }
    const user=await userModel.findOne({email:decoded.email},{ password: 0 })
     if (!user) {
      throw new Error("User not found", { cause: 400 });
    }
    req.decoded = decoded;
    req.user = user;
    next();
}