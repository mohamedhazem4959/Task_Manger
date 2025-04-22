import express from "express";
import { createAtask, deleteTask, getAllTasks, getSingleTask, updateTask } from '../controllers/task.js';
const router = express.Router();

router.route('/').get(getAllTasks).post(createAtask);

router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)


export default router;
