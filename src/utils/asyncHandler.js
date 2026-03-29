const asyncHandler = (requestHandler) =>{
    (res,req,next) =>{
        Promise.resolve(requestHandler(res,req,next)).
        catch((err)=>next(err))
    }
}





//or
// const asynHandler=(fn)=>async (res,req,next)=>{
//     try{
//         await fn(res,req,next)
//     }catch(error){
//         res.status((err.code) || 500).json({
//             success: false,
//             messagae: err.message
//         })
//     }
// }