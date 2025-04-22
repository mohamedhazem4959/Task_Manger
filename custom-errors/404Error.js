
class NotFoundError extends Error{
    constructor(message , StatusCode){
        super(message)
        this.StatusCode = StatusCode
    }   
}
export const CreatNotFound = (msg,StatusCode)=>{
    return new NotFoundError(msg,StatusCode)
}

export { NotFoundError }

