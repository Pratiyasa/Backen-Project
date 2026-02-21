import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB= async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Connected successfully to MONGODB server !!! ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("Error in connecting mongoose")
    }
}

export default connectDB