import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TimeTable(props) {

  return (
    <>
        <div className='p-10'>
    <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-5 min-h-[70vh]">
      <div className="mb-10">
        <div className='flex space-x-3 items-center'>
        <h2 className='font-bold text-lg'>Your Time Table</h2>
       
        </div>
      </div>
      <div>{
        console.log(props.timetable)
}</div>
    <div className="">
      
     {Object.entries(props.timetable["temp"]).map(([key, value]) => (
     

      <div key={uuidv4()} className="todos flex flex-col items-center m-6"> 
        <div className="flex-col justify-start w-full border-2 p-5 rounded-xl bg-white">
          <div className="font-bold text-2xl mb-4">{key}</div>
          <div className="flex-col  ml-10 justify-between w-1/2 ">
          {value.map((element)=>{
            // console.log(element)
            return <div key={uuidv4()} className='flex m-4'>
              <div className="flex"><div className="font-bold mr-3">Task Name : </div> <div className="">{element["taskName"]}</div></div>
              <div className="absolute left-2/3 flex"><div className="font-bold mr-3">Time :</div><div className="">{element["time"]}hour</div></div>
            </div> 
          })}
         
            
          </div>
        </div>
      </div>
    ))}
    </div>
    </div>
  </div>
    
      
    </>
  )
}

// TimeTable.defaultProps = {
//   timetable: {"temp":{}},
// };
