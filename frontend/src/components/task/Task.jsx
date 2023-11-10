import './task.css'
import {Edit,Delete,CheckCircle,} from '@mui/icons-material'
import axios from 'axios'
import { useState } from 'react'


export default function Task({data}) {
    const [stateData,setStateData]=useState({title:data.title,description:data.description})

const [editState,setEditState]=useState(false)
    function handleEdit(){
        setEditState(!editState)

    }
    function handleChange(e) {
        setStateData({
          ...stateData,
          [e.target.name]: e.target.value,
        });
      }
    function handleUpdate(e){
        e.preventDefault()
        setEditState(!editState)
        axios.patch(`http://localhost:5000/api/tasks/${data._id}`,stateData).catch((err)=>console.log(err))

    }

    function handleDelete(){
        axios.delete(`http://localhost:5000/api/tasks/${data._id}`).catch((err)=>console.log(err))

    }
  

  return (
  <>
  <div className="taskDiv" key={data._id}>
  {editState?<TaskEditComponent key={data._id} stateData={stateData} handleChange={handleChange} handleUpdate={handleUpdate}/>:<TaskContentComponent key={data._id} stateData={stateData}/>}
<div className="taskControls">
{
editState?<button onClick={handleUpdate}><CheckCircle/></button>:<button onClick={handleEdit}><Edit/></button>
    
}

    <button onClick={handleDelete}><Delete/></button>

</div>

  </div>
  </>
  )
}

const TaskContentComponent=({stateData})=>{
    return(
        <div className="taskContent">
<h2>{stateData.title}</h2>
<p>{stateData.description}</p></div>
    )
}
const TaskEditComponent=({stateData,handleChange,handleUpdate})=>{
    return(
        <>
        <div className="taskContent">
            <form onSubmit={handleUpdate}>
                <h4>Title</h4>
            <input type="text" name='title' value={stateData.title} onChange={handleChange} />
            <h4>Description</h4>
            <input type="text"name='description' value={stateData.description} onChange={handleChange} />
            </form>

        </div>
        </>
    )
}
