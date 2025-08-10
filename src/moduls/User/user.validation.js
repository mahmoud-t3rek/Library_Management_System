import joi from "joi";
import { userRole } from "../../DB/models/user.model.js";
import generalRoles from "../../Utlits/genralRole.js";

export const userSignUP = {
  body: joi.object({
    name: generalRoles.name.required(),
    email: generalRoles.email.required(),
    password: generalRoles.password.required(),
    cpassword: joi.valid(joi.ref("password")).required().messages({
      "any.only": "Confirm password must match password"
    }),
    role: joi.string().valid(...Object.values(userRole)).required()
  }),

};