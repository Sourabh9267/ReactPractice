import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='h-screen w-full flex items-start justify-center bg-zinc-200'>

        <div className="div flex items-center flex-col gap-4 ">

        <h1 className='text-4xl font-bold mt-8 text-red-400' >Home Page</h1>
        <p className='w-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aut quo dignissimos facilis praesentium, non recusandae repudiandae quas pariatur eius voluptas, maxime ipsa odit nesciunt sapiente magnam voluptates eligendi aperiam enim nobis dicta incidunt quos ratione. Debitis deleniti voluptatum optio pariatur doloribus odit aut exercitationem, quidem numquam recusandae nesciunt vero, repellendus deserunt adipisci error omnis, voluptate ad libero! Ad amet id culpa cupiditate officiis sit neque, veritatis atque, commodi, molestiae aliquam. Tempora illum nesciunt, nam asperiores cum reprehenderit. Neque voluptates inventore odit rem iusto eum dolorum natus eos, repellendus perferendis laboriosam exercitationem aliquam cumque aliquid, accusantium possimus? Illum, odit non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem earum aspernatur veniam provident nulla error odio ab quia, quas laudantium repellendus facere eius saepe numquam tenetur asperiores quod nemo praesentium placeat neque. Eius odit esse nemo eum autem? Necessitatibus temporibus quia optio, quibusdam vel ea tempore libero neque impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus ea nulla quam voluptate quaerat delectus debitis provident molestias asperiores molestiae sed explicabo, impedit facere expedita. Earum officia eaque eius.</p>

        <Link to="/About" className='h-12 w-36 bg-green-300 flex items-center justify-center text-xl font-bold rounded-full mt-10'> About Us </Link>

        </div>




    </div>
  )
}

export default Home