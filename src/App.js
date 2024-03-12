

import './App.css';
import Navbar from './Components/Navbar';
import AddTask from './Components/AddTask';
import Loading from './Components/Loading';
import axios from 'axios';
import { useState } from 'react';
import {
  
  Routes,
  Route,
  useNavigate 
} from "react-router-dom";
import TimeTable from './Components/TimeTable';

function App() {
  const [isloading,setloading] = useState(false);
  const [timetable,setTimeTable] = useState({})
  const navigate = useNavigate();
  
  const routeChange = () =>{ 
    let path = `/getTimeTable`; 
    navigate(path);
  }
  const handleAnalyze = async(deadline , todos)=>{
    setloading(true);
    let postBody={};
    postBody["deadline"]=deadline;
    postBody["tasks"]=todos.filter((item)=>item.isCompleted === false);
    console.log(postBody);
    const result = await axios.post("https://waytodo.onrender.com/getTimeTable",postBody);
    setloading(false);
   
    setTimeTable(result.data);
    routeChange()
   
 }
  
  return (
 
  <>
  
  <Navbar/>
   {isloading && <Loading/>}
 {!isloading && <Routes>
          <Route path="/" element={<AddTask handleAnalyze={handleAnalyze}/>}/>
          <Route path="/getTimeTable"  element={<TimeTable timetable={timetable}/>}/>
          
          
          
  </Routes>}
  
 
   </>
   
  );
}

export default App;
