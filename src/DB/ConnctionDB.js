import mongoose from "mongoose"

const Connection=()=>{
mongoose.connect(process.env.URL_ONLINE).then(()=>{
    console.log("connect succss.........................✌");
}).catch(()=>{
    console.log("faild connect..........................🤦‍♂️"); 
})
}

export default Connection 