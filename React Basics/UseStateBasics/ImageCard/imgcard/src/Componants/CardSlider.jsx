import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function CardSlider() {
    
    const[val,setVal]=useState(false);
    
    return (
    <div className=''>

        <div className="img bg-red-300 h-64 w-96 rounded-md flex items-end justify-center overflow-clip relative" >

            <button className="arr bg-[#dadada7b] absolute h-fit w-fit rounded-full mb-6 z-10" onClick={()=>(
                setVal((val)=>{
                    return !val;
                })
            )}>

            <IoIosArrowRoundForward  size={'4em'} />

            </button>
            <img className={`overflow-hidden absolute z-0 transition-transform ${!val ? 'translate-x-[0%]' : '-translate-x[100%]'}`} src="https://images.unsplash.com/photo-1547405602-cdafbb1d8a44?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`overflow-hidden absolute z-0 transition-transform ${val ? '-translate-x-[100%]' : '-translate-x[0%]'}`} src="https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />



        </div>


    </div>
  )
}

export default CardSlider