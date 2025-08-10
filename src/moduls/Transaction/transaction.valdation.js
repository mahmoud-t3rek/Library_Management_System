import joi from "joi";



export const AddBook = {
  body: joi.object({
   userId: joi.string().required(),
  bookId: joi.string().required(),
   availableCopies: joi.number().min(1).required()
  }),

};