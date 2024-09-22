import React from 'react'

function Card() {
  return (
    <div className="h-screen w-full bg-zinc-200 font-[poppins]"> 

        <div className=" w-52 rounded-sm bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] overflow-hidden">

            <div className='w-full h-32 bg-zinc-300'>

            <img src="https://png.pngtree.com/thumb_back/fh260/background/20220614/pngtree-blackbackgrounded-amazon-prime-or-shipping-box-market-fast-parcel-photo-image_36793638.jpg" alt="Amazon Box" className='h-full w-full object-cover' />

            </div>  
        
            <div className='w-full px-3 py-4'>

                <h2 className='font-semibold'>Amazon Basics.</h2>
                <p className='text-xs mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor numquam consequuntur.</p>
            </div>
        </div>
    
    </div>
  )
}

export default Card