import React from 'react'

function MusicCard(props) {
  return (
    <div className='h-40 w-fit flex flex-col items-center gap-2 backdrop-blur-sm bg-white/10 p-2 rounded-md drop-shadow-lg'>

        <div className="songinfo flex items-start justify-center ">


        <div className='img h-24 w-36  rounded-md overflow-hidden'>
            
            <img src={props.img} alt="" className='h-full w-full object-cover' />

        </div>

        <div className="songtext ml-2 flex items-start justify-center flex-col w-fit text-white">
        
            <div className="songname text-xl font-bold">{props.songname}</div>
            <div className="artistname text-sm">{props.artist}</div>

        </div>

        </div>

        

        <button onClick={()=>props.handleClick()} className={`${props.isFav ? "bg-teal-200 text-teal-700 ":" bg-orange-200 text-orange-500"} text-xs font-bold h-full w-44 rounded-full p-2  mt-2`}>
            
           {props.isFav ? "Remove from Favourites" : "Add to Favourites" }
            
        </button>

        

    </div>  
  )
}

export default MusicCard