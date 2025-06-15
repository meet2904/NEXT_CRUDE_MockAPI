"use client"
import React from 'react'


export default function CustomButton({id,fnToDelete}:{id:any,fnToDelete:any}) {
    
    
  return (
    <button onClick={()=>{fnToDelete(id)}} className='bg-danger text-white'>DELETE</button>
  )
}
