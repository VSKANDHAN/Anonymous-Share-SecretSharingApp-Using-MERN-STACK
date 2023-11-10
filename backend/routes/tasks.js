const express=require('express')

const taskRoutes=express.Router()
const {getTasks,postTask,patchTask,deleteTask}=require('../controllers/taskController')


taskRoutes.get('/',getTasks)
taskRoutes.post('/',postTask)
taskRoutes.patch('/:id',patchTask)
taskRoutes.delete('/:id',deleteTask)



module.exports=taskRoutes