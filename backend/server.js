const express=require('express');
const cors=require('cors')
require('dotenv/config')
const taskRoutes=require('./routes/tasks')
const connectDB=require('./config/db')

const app=express()
const PORT=process.env.PORT || 5000
connectDB()
app.use(cors())
app.use(express.json())
app.use('/api/tasks',taskRoutes)
app.get('/',(req,res)=>{
    res.send('Welcome to the Dailyticks ToDo API')
})

app.listen(PORT,()=>console.log("Server is running on the port 5000"))