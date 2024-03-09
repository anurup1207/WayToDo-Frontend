
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);

  const handleEdit=()=>{

  }
  const handleDelete =()=>{

  }
  const handleAdd = ()=>{
    
    if(todo !== ""){
    setTodos([...todos , {todo , isCompleted:false}]);
    setTodo("");
    }
    

  }
  const handleChange = (e)=>{
    setTodo(e.target.value);

  }
  return (
  <>
  <Navbar/>
  <div className='p-10'>
    <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[70vh]">
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add Todo</h2>

        <input type="text" onChange={handleChange} value={todo} className='w-1/2' />
        <button onClick={handleAdd} className='bg-violet-900 hover:bg-violet-950 text-white rounded-md py-1 px-3 mx-6 text-sm font-bold'>Add</button>
      </div>
      <h2 className='text-lg font-bold'>Your Todo</h2>
      <div className="todos">
        {todos.map(item=>{

        
        return <div key={todo} className="todo flex w-1/2 justify-between my-2 items-center shadow-2xl border-2 border-violet-300 p-3 rounded-xl">
          <div className={item.isCompleted?"line-through w-1/2 break-words":"w-1/2 break-words"}>
            {item.todo}
          </div>
          <div className="buttons">
            <button className='bg-violet-900 hover:bg-violet-950 text-white rounded-md py-1 px-3 mx-2 text-sm font-bold' onClick={handleEdit}>Edit</button>
            <button className='bg-violet-900 hover:bg-violet-950 text-white rounded-md py-1 px-3 text-sm font-bold' onClick={handleDelete}>Delete</button>
          </div>
        </div>
        })}
      </div>
    </div>
  </div>
   </>
  );
}

export default App;
