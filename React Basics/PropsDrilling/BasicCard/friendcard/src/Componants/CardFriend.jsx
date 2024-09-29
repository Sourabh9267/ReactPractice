import React from 'react'
import { TbFriends } from "react-icons/tb";
import { TbFriendsOff } from "react-icons/tb";

function CardFriend(props) {



  return (
    <div className='h-80 w-56 bg-zinc-100 rounded-md overflow-hidden font-[poppins] drop-shadow-md'>

        <div className="imgdiv h-36 w-full bg-zinc-500  ">

        <img src={props.userphoto} alt="" className='h-full w-full overflow-hidden object-cover'/>

        </div>

        <div className="profile h-fit w-full p-2">

            <h2 className='text-xl font-bold '>{props.username}</h2>
            <p className='text-wrap w-full text-xs mt-2 line-clamp-4'>{props.bio} </p>

        </div>

        <div className="btn h-12 w-full flex items-center justify-center">



            <button  className={`${props.friends ? 'bg-green-400':'bg-blue-400 '}  transition-transform delay-1000 h-8 w-40 rounded-full text-sm font-bold text-white flex items-center justify-center gap-2 `} onClick={props.btnfx}  >

              {props.friends ? <TbFriends />:<TbFriendsOff />}     
              {props.friends ? " Friends" : "Add as Friend"}
            </button>

        </div>

    </div>
  )
}

export default CardFriend