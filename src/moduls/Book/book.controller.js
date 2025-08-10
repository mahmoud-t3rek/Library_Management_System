import  Router from "express";
import * as BS from "./book.service.js";
import validation from "../../middleware/validation.js";
import { AddBook, updateBook } from "./book.validation.js";
import { authentication } from "../../middleware/authontcation.js";

const bookRouter=Router()

bookRouter.post("/",authentication,validation(AddBook),BS.addBook)
bookRouter.get("/",authentication,BS.getbooks)
bookRouter.patch("/:id",authentication,validation(updateBook),BS.UpdateBook)
bookRouter.delete("/:id",authentication,BS.deleteBook)
export default bookRouter