import mongoose from "mongoose";

const BookSchma=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishedYear:{
         type:Number,
        required:true
    },
    availableCopies:{
         type:Number,
        required:true,
        default:1
    },
    addedby: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "User",
         }


},{
timestamps:true
})

const BookModel=mongoose.models.Book || mongoose.model("Book",BookSchma)


export default BookModel