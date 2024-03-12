import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TimeTable(props) {

  return (
    <>
        <div className='p-2 md:p-10'>
    <div className="container mx-auto my-5 rounded-xl bg-violet-100 p-3 md:p-5 min-h-[70vh]">
      <div className="mb-10">
        <div className='flex space-x-3 items-center'>
        <h2 className='font-bold text-lg'>Your Time Table</h2>
       
        </div>
      </div>
    
    <div className="">
      
     {Object.entries(props.timetable["temp"]).map(([key, value]) => (
     

      <div key={uuidv4()} className="todos flex flex-col items-center mb-6 md:m-6"> 
        <div className="flex-col justify-start w-full border-2 p-5 rounded-xl bg-white">
          <div className="font-bold text-2xl mb-4">{key}</div>
          <div className="flex-col  md:ml-10 justify-between w-1/2 ">
          {value.map((element)=>{
            // console.log(element)
            return <div key={uuidv4()} className='flex items-center w-full mb-5'>
              <div className="flex items-center w-full "><span className="font-bold mr-2">Task Name: </span> <div className="break-words ">{element["taskName"]}</div></div>
              <div className="flex items-center absolute left-2/3"><div className="font-bold mr-1">Time :</div><div className="">{element["time"]}hour</div></div>
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
