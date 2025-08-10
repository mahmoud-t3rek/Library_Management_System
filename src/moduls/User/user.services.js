import userModel, { userRole } from "../../DB/models/user.model.js"
import bcrypt from "bcrypt"
import { createToken } from "../../Utlits/Token/createToken.js"

export const SignUp=async(req,res,next)=>{
 const {name,email,password,Cpassword,role}=req.body
const finduser=await userModel.findOne({email})
if (finduser) {
    throw new Error("Email is already Exist", { cause: 400 });
}

const hash= await bcrypt.hash(password,Number(process.env.SALT_ROUNDS))

const user=await userModel.create({
    name,
    email,
    password:hash,
    role
})
if(!user){
   throw new Error("faild SignUp",{cause:400})    
}
res.status(200).json({message:"Success",user})
}
//==============login====================
export const login=async(req,res,next)=>{
 const {email,password}=req.body
const finduser=await userModel.findOne({email})

const match= await bcrypt.compare(password,finduser.password)
if (!finduser || !match) {
   throw new Error("Invalid email or password", { cause: 409 })
}
const isUser = finduser.role == userRole.user;

const accesstoken = await createToken(
  { id: finduser.id, email},
  isUser ? process.env.ACCSESS_TOKENUSER : process.env.ACCSESS_TOKENADMIN,
  { expiresIn: 60*60}
);

const refreshToken = await createToken(
  { id: finduser.id, email  },
  isUser ? process.env.REFRESCH_TOKENUSER : process.env.REFRESCH_TOKENADMIN,
  { expiresIn: "1y" }
);

res.status(200).json({message:"confirmed Success",accesstoken,refreshToken})

}
//=================getProfile=============
export const getProfile=async(req,res,next)=>{
const user=req.user
res.status(200).json({message:"confirmed Success",userDetails:user})
}