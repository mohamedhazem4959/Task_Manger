import Task from '../modules/task.js'
import { CreatNotFound, NotFoundError } from '../custom-errors/404Error.js'
import 'express-async-errors'
/*-----------------------------------*/

export const getAllTasks = async(req,res,next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch (error) {
    next(error)
  }
}

export const getSingleTask = async(req,res,next) => {
    const {id:taskID} = req.params;
    const task = await Task.findOne({_id:taskID});
    if (!task) {
      return next(NotFoundError.CreatNotFound(`no task id like this: ${taskID}` , 404 ))
    }
    res.status(200).json({task});
}

export const createAtask = async(req,res,next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({task});
  } catch (error) {
    next(error)
  }

}

export const updateTask = async (req,res,next) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID} , req.body ,{
      new:true,
      runValidators:true,
    })
    if (!task) {
      return next(CreateNotFound(`no task id like this: ${taskID}` ,404 ))
    }
    res.status(200).json({task})
  } catch (error) {
    next(error)
  }
}

export const deleteTask = async (req,res,next) => {
  try {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID});
    if (!task) {
      return next(CreateNotFound(`no task id like this: ${taskID}` ,404 ))
    }
    res.status(200).json({task})
  } catch (error) {
    next(error)
  }
}

