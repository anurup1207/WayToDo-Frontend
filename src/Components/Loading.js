import React from 'react'
import loading from "./loading.gif"

export default function Loading() {
  return (
    <div className='flex h-screen justify-center items-center  '>
    <img src={loading} alt="loading" className='h-20 ' />
    </div>
  )
}
