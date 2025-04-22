import mongoose, { Mongoose } from "mongoose";

const TaskSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'oops you forgot to write the name'],
    trim:true,
    maxlength:[20,'maxlength is only 20 chars']
  },
  completed:{
    type:Boolean, 
    default:false
  }
})

const task = mongoose.model('Task' , TaskSchema);
export default task;