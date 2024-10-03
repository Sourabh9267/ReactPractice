import React from 'react'
import Card from './componants/Card'
import Button from './componants/Button'
import axios from 'axios'
import { useState } from 'react'

function App() {
    let prodData = [];

    const handleGetAPI=()=>{
        console.log("CALL API FUNCTION STARTED");
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log("API CALL SUCCESSFUL", res.data);
            prodData=[...res.data]
            setnewData([...prodData]);
            console.log(prodData);
            
        }).catch((err)=>{
            console.log(err.message);
            
        })
    }

    const [newData,setnewData]=useState(prodData);


    const sendData=[{
        id:300,
        title: "My Product",
        price: 100,
        description: "This is a sample product",
        category: "Electronics",
        image: "https://picsum.photos/id/237/200/300"
    }]

    const handleSendAPI=()=>{
        console.log("SEND API FUNCTION STARTED");
        axios.post("https://fakestoreapi.com/products",sendData).then((res)=>{
            console.log("API CALL SUCCESSFUL", res);
            
        }).catch((err)=>{
            console.log(err.message);
            
        })
    }

  return (
    <div className='bg-zinc-300 h-screen w-full  '>

        <div className="btn gap-5 h-12 w-full flex items-center justify-center">

        <Button bg="bg-green-200" text="Call Api" onClickfx={handleGetAPI}></Button>
        <Button bg="bg-orange-200" text="Send Data to API" onClickfx={handleSendAPI}></Button>
        </div>
        
          <div className="cards h-fit w-full flex  flex-wrap items-start justify-start bg-zinc-200 px-3 gap-2 font-[poppins]">

              {

                  newData.map((item, index) => {
                      return <Card key={index} img={item.image} productname={item.title} price={item.price} desc={item.description} category={item.category}></Card>
                  })
              }
          </div>
    


    </div>
  )
}

export default App