import React from 'react'

function CardFriend(props) {



  return (
    <div className='h-80 w-56 bg-zinc-300 rounded-md overflow-hidden font-[poppins]'>

        <div className="imgdiv h-36 w-full bg-zinc-500  ">

        <img src={props.userphoto} alt="" className='h-full w-full overflow-hidden object-cover'/>

        </div>

        <div className="profile h-fit w-full p-2">

            <h2 className='text-xl font-bold '>{props.username}</h2>
            <p className='text-wrap w-full text-xs mt-2 line-clamp-4'>{props.bio} </p>

        </div>

        <div className="btn h-12 w-full flex items-center justify-center">

            <button className='bg-blue-500 h-8 w-40 rounded-full text-sm font-bold text-white' onClick={()=>handleFriends} >
                Add Friend
            </button>

        </div>

    </div>
  )
}

export default CardFriend