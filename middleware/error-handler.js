const Error_Handler = (err , req,res,next)=> {
    return res.status(500).json({msg: err.message});
}

export default Error_Handler;