import './Tasks.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TaskComponent from '../../components/task/Task'
import {} from '@mui/icons-material'
 
export default function Tasks() {
const [APIData,setAPIData]=useState([])
useEffect(()=>{
    axios.get('https://dailyticks-api.onrender.com/api/tasks').then(
        (res)=>{
            setAPIData(res.data)
    console.log(res);

        }

    ).catch((err)=>console.log(err))

},[APIData])
const [data,setData]=useState({title:'',description:''})
function handleChange(e){
    setData((data)=>({...data,[e.target.name]:e.target.value}))

}
function handleSubmit(e){
    e.preventDefault()
  axios.post('https://dailyticks-api.onrender.com/api/tasks',data).then(()=>setData({title:'',description:''})).catch((err)=>console.log(err))

}
  return (
    <>
    <h1>Anonymous Ticks</h1>
    <p>Add something secret wihtout sharing your info 🤖</p>
    <div className="addTask">
<form onSubmit={handleSubmit}>
    <div className="taskInput"> <input type="text" placeholder='Title' name='title' value={data.title} onChange={handleChange}/>
    <input type="text" name='description' placeholder='Add a Description' value={data.description} onChange={handleChange}/></div>
<input type="submit" value='Add Tasks'/>
</form></div>
    {
        APIData.map((data)=><TaskComponent key={data._id} data={data}/>)

    }
    
    </>
  )
}
