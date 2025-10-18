import { app } from "./app.js";
import connect_db from "./db/index.js";
import dotenv from "dotenv";

connect_db()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`App running on port ${process.env.PORT || 8000}`)
    })
})
.catch((e)=>{
    console.log("mongo db connection failed ",e)
})