import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.get("/", (req, res) => {
    res.send("API working");
});


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'

console.log("User Router Loaded")
//routes declaration
app.use("/api/v1/users",userRouter)  //we will use middleware insted of direct routing which will call to userRouters in routes folder





//http://localhost:8000/api/v1/users/register

export {app}