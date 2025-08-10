import express from 'express'
import dotenv from "dotenv";
import path from "path"
dotenv.config({path:path.resolve("src/config/.env")})
import Bootstrap from './src/app.controller.js';
const app = express()
const port = process.env.PORT  
Bootstrap(app,express)

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 