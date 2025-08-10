import BookModel from "../../DB/models/Book.model.js";
import transctionModel from "../../DB/models/Transction.model.js";


export const borrowBook=async(req,res,next)=>{
    const { userId, bookId, availableCopies } = req.body;
   
     if (userId !== req.user._id.toString()) {
     throw new Error( "userId unauthorized",{cause:400});
     
    }
    const book = await BookModel.findById(bookId);
      if (!book) {
      throw new Error("book not found",{cause:400});
    }
      if (book.availableCopies < availableCopies) {
      throw new Error("not enough available copies",{cause:400});
      
    }
     const transaction = new transctionModel({userId, bookId,status: "borrowed"});
     await transaction.save();
    book.availableCopies -= availableCopies;
    await book.save();

    res.status(200).json({ message: "Book borrowed successfully",transaction});
}
//===================================================================
export const returnBook=async(req,res,next)=>{
    const {id}=req.params
    const user=req?.user
    const findtrans = await transctionModel.findById(id);
    if (!findtrans) {
      throw new Error( "Transaction not found",{cause:400});
      
    }
     if (findtrans.userId.toString() !== user._id.toString()) {
        throw new Error( "userId unauthorized",{cause:400});
    }
    if(findtrans.status=="returned"){
        throw new Error("book alredy back",{cause:400}); 
    }
  findtrans.status="returned"
  await findtrans.save()

  const book=await BookModel.findById(findtrans.bookId)
  if(!book){
    throw new Error("book not found",{cause:400});
  }
    book.availableCopies+=1
    await book.save();

    res.status(200).json({ message: "Book returned successfully",findtrans});
}
//======================================================
export const getBook=async(req,res,next)=>{
   const user=req?.user
   const findUser=await transctionModel.find({userId:user?._id}).populate("bookId")
   if(!findUser){
    throw new Error("the user has no transation",{cause:400});  
   }



    res.status(200).json({ message: " success",findUser});
}