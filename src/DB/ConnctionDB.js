import mongoose from "mongoose"

const Connection=()=>{
mongoose.connect(process.env.URL).then(()=>{
    console.log("connect succss.........................✌");
}).catch(()=>{
    console.log("faild connect..........................🤦‍♂️"); 
})
}

export default Connection