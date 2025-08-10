import BookModel from "../../DB/models/Book.model.js"
import validation from "../../middleware/validation.js"


export const addBook=async(req,res,next)=>{
    const user=req?.user
    const {title,author,publishedYear,availableCopies}=req.body
    const book=await BookModel.create({title,author,publishedYear,availableCopies,addedby:user?._id})
    if(!book){
        throw new Error("faild add book ",{cause:400});  
    }
    res.status(200).json({message:"added Successfully",book})
}
//============getallbooks=======================
export const getbooks=async(req,res,next)=>{
  const books = await BookModel.find().sort({ publishedYear: 1 });
  if(!books){
    throw new Error("faild share books",{cause:400})
  }
    res.status(200).json({message:"done",books})
}
//==================UpdateBook==========================
export const UpdateBook=async(req,res,next)=>{
      const user=req?.user
    const {id}=req.params
   const book = await BookModel.findById(id);
    if (!book) {
      throw new Error("Book not found",{cause:400});
      
    }
   if (book.addedby.toString() !== req.user._id.toString()) {
  throw new Error("You are not authorized to Update this book.", { cause: 400 });
}
    const updatedBook = await BookModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBook) {
      return res.status(400).json({ message: "Failed to update book" });
    }

    res.status(200).json({message:"done",updatedBook})
}
//===============deleteBook=====================
export const deleteBook=async(req,res,next)=>{
    const user=req?.user
    const {id}=req.params
    const book = await BookModel.findById(id);
    if (!book) {
        throw new Error("Book not found",{cause:400});
    }
    if (book.addedby.toString() !== req.user._id.toString()) {
        throw new Error("You are not authorized to deleted this book.", { cause: 400 });
    }
  await book.deleteOne()
    res.status(200).json({message:"book deleted successfully"})
}