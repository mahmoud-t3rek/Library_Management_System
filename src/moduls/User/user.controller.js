import Router  from "express";
import * as US from  "./user.services.js";
import validation from "../../middleware/validation.js";
import { userSignUP } from "./user.validation.js";
import { authentication } from "../../middleware/authontcation.js";

const userRouter=Router()
console.log("User router");


userRouter.post("/register",validation(userSignUP),US.SignUp)
userRouter.post("/login",US.login)
userRouter.get("/profile",authentication,US.getProfile)
export default userRouter 