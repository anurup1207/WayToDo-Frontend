import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function AddTask(props) {
  const [task,setTask] = useState("");
  
  const [deadline,setDeadline] = useState("");
  const [expected_hours, setExpectedHours] = useState("");
  
  const [todos,setTodos] = useState([]);

  const handleEdit=()=>{

  }
  const handleDelete =()=>{

  }
  const handleAdd = ()=>{
    
    if(task !== "" && expected_hours !== 0){
    // setTodo({"task":task , "expected_hours" : expected_hours});
    setTodos([...todos , {task,expected_hours , isCompleted:false}]);
    setTask("");
    setExpectedHours("");
    }
    

  }
  const handleChangeName = (e)=>{
    setTask(e.target.value);

  }
  const handleChangeTime = (e)=>{
    setExpectedHours(e.target.value);

  }
  const handleChangeDeadline = (e)=>{
    setDeadline(e.target.value);

  }
  const handleAnalyze=()=>{
    props.handleAnalyze(deadline,todos)
  }
 
  return (
    <>
    <div className="p-2 md:p-10">
    <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[70vh]">
      <div className="deadline">
        <div className=' space-x-3 items-center flex'>
        <div className='w-40 md:flex'>
        <h2 className='font-bold text-lg'>Deadline</h2><h2>(in days)</h2>
        </div>
        <input type="number" onChange={handleChangeDeadline} value={deadline} className=' h-10 rounded-md border-2 border-black w-80 lg:w-auto' placeholder='Enter Deadline in days' required/>
        </div>
      </div>
      <div className="addTodo my-10 lg:flex justify-between items-center ">
        <div className="flex  items-center mb-2 lg:space-x-3">
        <h2 className='text-lg font-bold mr-2 w-40 lg:w-none'>Add Task</h2>
        <input type="text" onChange={handleChangeName} value={task} className='w-80 h-10 rounded-md border-2 border-black lg:w-auto' placeholder='Add Your Task Here !' />
        </div>
        <div className='flex items-center mb-2  lg:w-none'>
        <h2 className='text-lg font-bold mr-2 w-40'>Expected Time</h2>
        <input type="number" onChange={handleChangeTime} value={expected_hours} className='h-10 w-80 rounded-md border-2 border-black ' placeholder='Expected Time to Complete'/>
        </div>
        <button onClick={handleAdd} className='bg-violet-900 hover:bg-violet-950 text-white rounded-md py-1 px-3 text-sm font-bold'>Add</button>
      </div>
      <h2 className='text-lg font-bold'>Your Todo</h2>
      <div className="todos flex flex-col items-center">
        {todos.map(item=>{

        
        return <div key={uuidv4()} className="todo  w-full lg:w-3/4 my-2 flex-col md:flex-row items-center  shadow-2xl border-2 border-violet-300 p-3 rounded-xl lg:flex ">
          <div className='flex mb-3 lg:w-3/4 '>
          <div className={item.isCompleted?"line-through w-3/5 break-words":"w-3/5 break-words"}>
            {item.task}
          </div>
          <div className={item.isCompleted?"line-through w-1/4 break-words":"w-max"}>
            {item.expected_hours} hours
          </div>
          </div>
          <div className="buttons flex items-center justify-center">
            <button className='bg-violet-900 hover:bg-violet-950 text-white rounded-md py-1 px-3 mx-2 text-sm font-bold' onClick={handleEdit}>Edit</button>
            <button className='bg-violet-900 hover:bg-violet-950 text-white rounded-md py-1 px-3 text-sm font-bold' onClick={handleDelete}>Delete</button>
          </div>
          </div>
        
        })}
      <div className="getTimeTable my-10">
        <button className='bg-violet-900 hover:bg-violet-950 text-white rounded-md py-1 px-3 mx-6 text-sm font-bold' onClick={handleAnalyze}>GET TIME TABLE</button>
      </div>
      </div>
    </div>
  </div>
      
    </>
  )
}
