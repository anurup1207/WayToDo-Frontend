import React from 'react'
import loading from "./loading.gif"

export default function Loading() {
  return (
    <div className='flex h-screen justify-center items-center '>
      <div className="flex-col items-center justify-center">
     <div className='font-bold text-2xl' >Analyzing...</div> 
     <div className='flex justify-center'>
    <img src={loading} alt="loading" className='h-20 ' />
    </div>
    </div>
    </div>
  )
}
