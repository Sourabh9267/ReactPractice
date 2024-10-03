import React from 'react'
import Button from './Button'


function Card({category,productname,desc,price,img}) {

    const obj={
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }


  return (
    <>
    <div className='card h-fit w-fit flex rounded-md overflow-hidden drop-shadow-md transition-transform duration-200'>

        <div className='h-96 w-64  overflow-hidden transition-transform duration-200'>
            <div className="overlay h-full w-1/2 overflow-hidden bg-zinc-800 opacity-30 hover:opacity-0  absolute transition-transform duration-700"></div>
            <img src={img} alt="" className=' h-full w-full rounded-md object-cover'/>
        </div>
        
        <div className='h-96 w-64 bg-[#2D2E32] p-4' >

            <h2 className='text-[#EDC42C] text-xs mt-2 font-semibold uppercase'>{category}</h2>

            <h1 className='text-lg text-white mt-4 font-bold'>{productname} </h1>
            <h4 className='text-xs text-gray-400 '>The E-Commerce Express</h4>

            <h3 className=' text-xl text-yellow-400 mt-2'>$ {price}</h3>

            <p className='text-sm mt-2 text-gray-400 line-clamp-5'>{desc}</p>

            <div className="btns flex w-full h-fit gap-4 mt-6 font-bold">

            <Button text="Add to Cart" bg="bg-blue-400" ></Button>
            <Button text="Buy Now" bg="bg-green-400" ></Button>


            </div>

        </div>
        
    </div>
    </>
  )
}

export default Card