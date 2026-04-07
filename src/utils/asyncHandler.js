// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise
//             .resolve(requestHandler(req, res, next))
//             .catch((err) => next(err))
//     }
// }

// export { asyncHandler }


const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
        try {
            await requestHandler(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

export { asyncHandler }


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