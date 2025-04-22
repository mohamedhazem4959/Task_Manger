import express from "express";
import connectDB from './connect.js'
import tasks from './routes/task.js'
import notFound from './middleware/not-found.js'
import Error_Handler from "./middleware/error-handler.js";
const app = express();
const port = process.env.PORT || 3000
import "dotenv/config";
/*----------------------------------*/

//middlewares
app.use(express.json())
app.use('/api/v1/tasks' , tasks)
app.use(notFound)
app.use(Error_Handler);
/*-----------------------------------*/

const start = async()=>{
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port , ()=> {
      console.log(`server is running on port: ${port}`);
    })
  } catch (error) {
    console.log(error)
  }
}
start();