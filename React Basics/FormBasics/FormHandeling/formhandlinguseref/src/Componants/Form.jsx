import React, { useRef } from 'react'

function Form() {

    const namefield=  useRef(null)
    const emailfield=  useRef(null)
    const messagefield=  useRef(null)
  

    const handlesub= (e) =>{
        e.preventDefault();
     

        let data={name: namefield.current.value, email: emailfield.current.value, message: messagefield.current.value}
        console.log(data);
        
    }

  return (
    <div className='bg-zinc-300 h-96 w-80 px-2 py-4 rounded-md'>

        <form action="" onSubmit={handlesub}  className='flex flex-col gap-4 items-center'>

            <label htmlFor="">Contact Form</label>

            <input ref={namefield} type="text" placeholder='Your Name' className='h-12 w-full p-2 rounded-md'/>
            <input ref={emailfield} type="email" placeholder='Your E-mail' className='h-12 w-full p-2 rounded-md'/>
            <textarea ref={messagefield} placeholder="Your Message Here" className='h-32 w-full p-2 rounded-md' /> 
           
            <input type="submit" value="SUBMIT" className='h-12 w-full rounded-md bg-green-300' />


        </form>


    </div>
  )
}

export default Form