
import joi from "joi";



 const generalRoles = {
  email: joi.string().email({ tlds: { allow: false } }),
  password: joi.string().min(6).max(30),
  name: joi.string().min(3).max(30).alphanum(),
  title:joi.string().min(3).max(30),
  author:joi.string().min(3).alphanum(),
  publishedYear: joi.number().integer(),
  availableCopies: joi.number().integer().min(1) 
};
export default generalRoles