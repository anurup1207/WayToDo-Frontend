import React from 'react'
import loading from "./loading.gif"

export default function Loading() {
  return (
    <div className='flex justify-center relative top-50 '>
    <img src={loading} alt="loading" className='h-20 ' />
    </div>
  )
}
