import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='h-screen w-full flex items-start justify-center bg-zinc-200'>

        <div className="div flex items-center flex-col gap-4 ">

        <h1 className='text-4xl font-bold mt-8 text-red-400' >About Us</h1>
        <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni laborum excepturi explicabo? Sit dolorem voluptatem, pariatur aut ullam molestias hic non earum in ducimus, et iste ipsam praesentium mollitia distinctio tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem earum aspernatur veniam provident nulla error odio ab quia, quas laudantium repellendus facere eius saepe numquam tenetur asperiores quod nemo praesentium placeat neque. Eius odit esse nemo eum autem? Necessitatibus temporibus quia optio, quibusdam vel ea tempore libero neque impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus ea nulla quam voluptate quaerat delectus debitis provident molestias asperiores molestiae sed explicabo, impedit facere expedita. Earum officia eaque eius.</p>

        <Link to="/Contact" className='h-12 w-36 bg-green-300 flex items-center justify-center text-xl font-bold rounded-full mt-10'> Contact Us </Link>

        </div>




    </div>
  )
}

export default About