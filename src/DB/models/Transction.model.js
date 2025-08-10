import mongoose from "mongoose";
export let transactionStatus = {
  borrowed: "borrowed",
  returned: "returned"
};

const transctionSchema= new mongoose.Schema({
 userId:{
    type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref: "User"
    },
    bookId:{
    type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref: "Book" 
    }, 
    borrowDate: {
    type: Date,
    required: true,
    default: Date.now
  },
    returnDate: {
    type: Date
  },
    status: {
    type: String,
    enum: Object.values(transactionStatus),
    required: true,
  }

},{
    timestamps:true
})


const transctionModel = mongoose.models.Transction || mongoose.model("Transction", transctionSchema);

export default transctionModel