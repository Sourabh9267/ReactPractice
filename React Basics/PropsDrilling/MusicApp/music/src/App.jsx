import React from 'react'
import MusicCard from './Componants/MusicCard'
import Navbar from './Componants/Navbar'
import { useState } from 'react'
function App() {


  const  songData=[
    {
    img:"https://www.billboard.com/wp-content/uploads/media/alan-walker-press-cr-Rikkard-Haggbom-2016-billboard-1548.jpg",
    songname:'Faded-Reprise ',
    artist: 'Alan walker',
    isFav:false
    },
    {
    img:"https://www.hindustantimes.com/ht-img/img/2024/03/10/1600x900/ed_sheeran_1710051495622_1710051500856.jpeg",
    songname:'Shape of You ',
    artist: 'Ed - Sheeran',
    isFav:false
    },
    {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4gkJAfamxXexMnsOIX0QtntrIIi28WgXww&s",
    songname:'Let Me Love You',
    artist: 'Dj Snake',
    isFav:false
    },
    {
    img:"https://assets.telegraphindia.com/telegraph/2024/Aug/1723612602_yo-yo-honey-singh.jpg",
    songname:'Millionare from Glory',
    artist: 'Yo Yo Honey Singh',
    isFav:false
    },
    {
    img:"https://i.ytimg.com/vi/-dhx7Hnu-wo/maxresdefault.jpg",
    songname:'MetaMorphoisis ',
    artist: 'INTERWORLD',
    isFav:false
    },
    {
    img:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F12%2Fjustin-bieber-music-rights-catalogue-sales-deal-200-million-usd-report-001.jpg?q=75&w=800&cbr=1&fit=max",
    songname:'Baby',
    artist: 'Justin Bieber',
    isFav:false
    },

  ]

 

  const[data,setData]=useState(songData)

  const handleClick = (songidx)=>{

    
    setData((prev)=>{
      
      return data.map((item,itemidx)=>{
        
        if(itemidx===songidx)
        {
          return {...item,isFav:!item.isFav}
        }
        return item;
      })
    })


  }

  return (
    <div className='h-screen w-full bg-zinc-800 font-[poppins]  '>
      <Navbar data={data}/>
      <div className="main flex items-center justify-start h-fit w-full flex-wrap gap-6 p-6" >

      {
        
        data.map((item,idx)=>{
          return <MusicCard key={idx} img={item.img} songname={item.songname} artist={item.artist} isFav={item.isFav} handleClick={()=>handleClick(idx)}/>
          })
          
        }

      </div>
        
    </div>
  )
}

export default App