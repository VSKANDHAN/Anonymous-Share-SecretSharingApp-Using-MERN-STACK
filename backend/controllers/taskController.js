const tasks=require('../models/tasks')
exports.getTasks=(req,res)=>{
   tasks.find().then((task)=>res.json(task)).catch((err)=>{
    res.status(404).json({message:'Tasks Not Found',error:err.message})
   })

}

exports.postTask=(req,res)=>{
    tasks.create(req.body).then((task)=>res.json({message:'Tasks Added Successfully',task})).catch((err)=>{
        res.status(404).json({message:'Tasks Not Found',error:err.message})
       })
}
exports.patchTask=(req,res)=>{
    tasks.findByIdAndUpdate(req.params.id,req.body).then((task)=>res.json({message:'Tasks Updated Successfully',task})).catch((err)=>{
        res.status(404).json({message:'Tasks Not Found',error:err.message})
       })
}
exports.deleteTask=(req,res)=>{
    tasks.findByIdAndDelete(req.params.id).then((task)=>res.json({message:'Tasks Deleted Successfully',task})).catch((err)=>{
        res.status(404).json({message:'Tasks Not Found',error:err.message})
       })
}