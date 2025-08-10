import joi from "joi";

import generalRoles from "../../Utlits/genralRole.js";

export const AddBook = {
  body: joi.object({
    title: generalRoles.title.required(),
    author: generalRoles.author.required(),
    publishedYear: generalRoles.publishedYear.required(),
    availableCopies: generalRoles.availableCopies.required()
  }),

};
export const updateBook = {
  body: joi.object({
    title: generalRoles.title,
    author: generalRoles.author,
    publishedYear: generalRoles.publishedYear,
    availableCopies: generalRoles.availableCopies
  }),

};
