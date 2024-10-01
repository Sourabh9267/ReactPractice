import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Users() {

    const usrdata=[
        {
            uname:"John Doe"
        },
        {
            uname:"Adam Smith"
        },
        {
            uname:"Iliana Desouza"
        },
        {
            uname:"Martin Madrrazo"
        }

    ]

        const Navigate=useNavigate()

    const handleNav=()=>{
            Navigate("/");
    }

  return (
   
    <div className='h-screen w-full flex items-start justify-center bg-zinc-200'>

        <button onClick={handleNav} className='bg-blue-400 text-xs h-12 w-24 font-bold absolute top-28 rounded-full'> 👈 Go Back</button>
        <div className="div w-full flex items-center flex-col gap-4 ">

        <h1 className='text-4xl font-bold mt-20 text-red-400' >Users</h1>
        
        <div className="list w-1/2 bg-zinc-300 h-fit fit flex flex-col gap-2">
        {

            usrdata.map((item,index)=>{
                return (
                    <Link to={`/Users/ ${item.uname} `} className='bg-red-200 p-5 hover:bg-red-400'>{item.uname}</Link>
                )
            })

        }

        <Outlet></Outlet>
        
        </div>


        {/* <Link to="/About" className='h-12 w-36 bg-green-300 flex items-center justify-center text-xl font-bold rounded-full mt-10'> About Us </Link> */}

        </div>




    </div>


  )
}

export default Users