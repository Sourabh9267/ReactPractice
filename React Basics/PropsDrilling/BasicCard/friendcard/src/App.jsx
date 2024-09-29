 import React, { useState } from 'react'
 import CardFriend from './Componants/CardFriend'
function App() {

  const usrdata=[
    {
      img:'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:'John Smith',
      desc:'Hey Mr. Smith is an expert speaker at the University of Texas at Austin. He has established several successful speakers at the University of Texas at Austin',
      isFriend:false
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661774991416-ee14a1bc0d30?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:'Adam Doe',
      desc:'Hey Mr. Adam Doe along with his brother Mr. Cheng is an expert speaker at the University of Texas at Austin. He has established several successful speakers at the University of Texas at Austin',
      isFriend:false
    },
    {
      img:'https://images.unsplash.com/photo-1648307277349-90f5c8b97667?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:'Martin Maddrazzo',
      desc:'Hey Mr. Maddrazoo from Los Santos is an expert speaker at the University of Texas at Austin. He has established several successful speakers at the University of Texas at Austin',
      isFriend:false
    },
    {
      img:'https://images.unsplash.com/photo-1615327388641-203faee20165?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:'Lucas Clinton',
      desc:'Hey Mr. Lucas is an expert speaker at the University of Texas at Austin. redwolf-USA is in the coopreation with him.',
      isFriend:false
    }

  ]

  const [data,setData]=useState(usrdata);

  const handleFriends= (index)=>{
    console.log("Function Chal Gaya");
    
    setData((prevData)=>{

      return  prevData.map((item,idx)=>{
        if(idx===index){
          return {...item, isFriend: !item.isFriend}
        }

        return item;
      })

    })

  }

  return (
    <div className='bg-zinc-300 h-screen w-full flex items-center justify-center gap-4'>

      {
        data.map((elem,index)=>(
          <CardFriend userphoto={elem.img} username={elem.name} bio={elem.desc} friends={elem.isFriend}  key={index}  btnfx={()=>handleFriends(index)} />
        ))

      }

   

    </div>
  )
}

export default App