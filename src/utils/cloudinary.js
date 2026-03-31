import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUD_API_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})


const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
         //upload the file on cloudinary
        const response=await cloudinary.uploader.upload(
            localFilePath, {
                resource_type:"auto"
            }
        )
        //file has been successfully uploaded
        console.log(response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the temporary file in the local server since the upload operation got failed
        return null
    }
}


export {uploadOnCloudinary}