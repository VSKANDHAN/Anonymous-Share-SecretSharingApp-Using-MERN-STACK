const mongoose=require('mongoose')

const tasksSchema=new mongoose.Schema({
    title:{
        type:"string",
        required:true
    },
    description:{
        type:'string',
        required:true
    },
   

})

const tasks=mongoose.model('tasks',tasksSchema)
module.exports=tasks