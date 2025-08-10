import mongoose from "mongoose";
export let userRole = {
  admin: "admin",
  member: "member"
};
const userSchema= new mongoose.Schema({
name:{
     type:String,
    required:true
},
email:{
    type: String,
    required: true,
    unique: true
},
password:{
    type: String,
    required: true,
},
 role: {
    type: String,
    required: true,
    enum: Object.values(userRole)
  }
},{
    timestamps:true
})


const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel