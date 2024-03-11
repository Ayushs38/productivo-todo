// this is using promises to resolve the async  for handling asynchronous
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// this is using async try catch block for handling asynchronous
// const asyncTryHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next)
//     }catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
//     }
// }

export { asyncHandler };
