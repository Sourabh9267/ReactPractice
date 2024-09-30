import React, { useRef, useState } from 'react'

function Form() {

  const formdata=[{name:'',email:'',message:''}];


  const [val ,setVal] =  useState(formdata)

    const handlesub= (e) =>{
        e.preventDefault();
      
        console.log(val);
        
        
        
    }

  return (
    <div className='bg-zinc-300 h-96 w-80 px-2 py-4 rounded-md'>

        <form action="" onSubmit={handlesub}  className='flex flex-col gap-4 items-center'>

            <label htmlFor="">Contact Form</label>

            <input onChange={(event)=>setVal({...val,name:event.target.value})} type="text" placeholder='Your Name' className='h-12 w-full p-2 rounded-md'/>
            <input onChange={(event)=>setVal({...val,email:event.target.value})} type="email" placeholder='Your E-mail' className='h-12 w-full p-2 rounded-md'/>
            <textarea onChange={(event)=>setVal({...val,message:event.target.value})} placeholder="Your Message Here" className='h-32 w-full p-2 rounded-md' /> 
           
            <input type="submit" value="SUBMIT" className='h-12 w-full rounded-md bg-green-300' />


        </form>


    </div>
  )
}

export default Form