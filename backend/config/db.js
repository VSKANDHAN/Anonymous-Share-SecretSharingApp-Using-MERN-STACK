const mongoose=require('mongoose')
const db=process.env.MONGODB_URI
 const connectDB=async ()=>{
    try{
        await mongoose.connect(db)
        console.log('Connected To The Database');
    }
    catch(err){
        console.log(err);

    }
 }

 module.exports=connectDB