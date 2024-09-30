import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form"

function Form() {

  const {register,handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className='bg-zinc-300 h-96 w-80 px-2 py-4 rounded-md'>

        <form action=""  onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-center'>

            <label htmlFor="">Contact Form</label>

            <input {...register('name')} type="text" placeholder='Your Name' className='h-12 w-full p-2 rounded-md'/>
            <input {...register('email')} type="email" placeholder='Your E-mail' className='h-12 w-full p-2 rounded-md'/>
            <textarea {...register('message')} placeholder="Your Message Here" className='h-32 w-full p-2 rounded-md' /> 
           
            <input type="submit" value="SUBMIT" className='h-12 w-full rounded-md bg-green-300' />


        </form>


    </div>
  )
}

export default Form