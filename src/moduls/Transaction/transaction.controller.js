import  Router from "express";
import validation from "../../middleware/validation.js";
import { AddBook } from "./transaction.valdation.js";
import * as TS from "./transaction.service.js";
import { authentication } from "../../middleware/authontcation.js";


const transactionRouter=Router()

transactionRouter.post("/borrow",authentication,validation(AddBook),TS.borrowBook)
transactionRouter.put("/return/:id",authentication,TS.returnBook)
transactionRouter.get("/return/user",authentication,TS.getBook)
export default transactionRouter