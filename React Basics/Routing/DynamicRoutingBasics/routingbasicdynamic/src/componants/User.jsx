import React from 'react'
import { useParams } from 'react-router-dom'


function User() {

   const obj= useParams()
   
    

  return (
    <div className="div w-full h-40 flex items-center justify-center mt-12">

        <div className='flex items-center justify-center h-32 w-64 bg-red-100 rounded-md drop-shadow-md'>
        
            <h1>Hey👋 {obj.name} </h1>
        
        
        
        </div>
        
    </div>
  )
}

export default User