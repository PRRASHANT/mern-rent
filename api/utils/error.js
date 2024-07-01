export const errorHandler = (satusCode, message)=>{
    const error = new Error()
    error.satusCode= satusCode;
    error.message = message;
    return error;

};