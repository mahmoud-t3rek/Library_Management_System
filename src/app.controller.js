import Connection from "./DB/ConnctionDB.js"
import { globalErrorHandling } from "./middleware/GlobalHandleError.js"
import bookRouter from "./moduls/Book/book.controller.js";
import transactionRouter from "./moduls/Transaction/transaction.controller.js";
import userRouter from "./moduls/User/user.controller.js";


const Bootstrap=(app,express)=>{

app.use(express.json())
Connection()
  app.get("/", (req, res) => {
  res.send("Welcome to app..............✌️💙");
});
app.use("/api/user",userRouter)
app.use("/api/books",bookRouter)
app.use("/api/transaction",transactionRouter)
app.use(globalErrorHandling)
app.use("{/*demo}", (req, res, next) => {
  throw new Error(`404 URL not found ${req.originalUrl}`, { cause: 404 });
});

}

export default Bootstrap