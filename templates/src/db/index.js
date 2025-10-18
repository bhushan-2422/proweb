import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connect_db = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("\n mongo db connected...  db host: ",connectionInstance.connection.host)

    }catch(e){
        console.log("MONGO DB CONNECTION FAILED...",e)
    }
}

export default connect_db