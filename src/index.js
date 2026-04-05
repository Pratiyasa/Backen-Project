// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from 'express'
import connectDB from "./db/index.js";
import dotenv from "dotenv"


dotenv.config({
    path:'./env'
})

const app=express()

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
             console.log(`App is listening on PORT ${process.env.PORT}`)
         })
     app.on("error",(error)=>{
            console.log("error :",error)
            throw error
        })
}).catch((e)=>{
    console.log("Error :",e)
});



// const app=express()

// (async ()=>{
//     try {
//         await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error :",error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on PORT ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.error("Error: ",error)
//     }
// })()