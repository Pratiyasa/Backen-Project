import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import User from "../models/user.model.js"


const registerUser= asyncHandler( async (req,res) =>{
    
    const {fullname,email,username,password}= req.body
    

    if(
        [fullname, email, username, password].some((field)=>      //checked for all fields at once
        field?.trim() ==="")
    ){
        throw new ApiError(400, "All fields needed to be filled")
    }

    const existedUser = User.findOne({
        $or: [{username} , {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User with email or username already exists")
    }
})


export {registerUser}