import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='h-screen w-full flex items-start justify-center bg-zinc-200'>

        <div className="div flex items-center flex-col gap-4 ">

        <h1 className='text-4xl font-bold mt-8 text-red-400' >Contact Us</h1>
        <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat ex ipsam, distinctio nesciunt laborum reiciendis in itaque eaque eos vitae voluptate autem deserunt unde quasi totam, veniam aut ab, impedit sunt praesentium. Magnam, voluptatem saepe. Possimus numquam voluptatem consequatur, perspiciatis quidem, quis repudiandae tempore repellat distinctio tenetur et. Animi ducimus, magnam velit laboriosam inventore odit, nesciunt assumenda tenetur ea quisquam quis vel molestias voluptates similique, culpa odio ullam sint excepturi? Velit, quo voluptate eligendi temporibus maiores suscipit, perspiciatis magni sapiente, accusamus blanditiis quis ad dicta molestiae ut porro pariatur expedita. Consequatur enim fugiat quibusdam saepe odio aperiam odit id, nemo assumenda reiciendis? Doloribus, iste earum tempore aspernatur culpa, ab impedit consectetur, saepe ducimus incidunt consequatur corporis laboriosam. Nihil sunt dignissimos, enim, nostrum harum qui facilis quisquam quaerat aliquid eligendi repellendus exercitationem porro cum. A quibusdam quo aliquam nulla. Amet dolor, voluptatem repudiandae dolore facilis exercitationem natus recusandae nihil vero repellendus illum in magni autem quos quo et aspernatur ipsam atque harum aut aperiam? Delectus aspernatur voluptatem praesentium distinctio ratione rerum est ad libero ea numquam debitis eius assumenda, vitae tempora sed velit eos cumque illo aperiam saepe? Quam similique quos architecto laborum quod dolores autem eum facilis animi quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem earum aspernatur veniam provident nulla error odio ab quia, quas laudantium repellendus facere eius saepe numquam tenetur asperiores quod nemo praesentium placeat neque. Eius odit esse nemo eum autem? Necessitatibus temporibus quia optio, quibusdam vel ea tempore libero neque impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus ea nulla quam voluptate quaerat delectus debitis provident molestias asperiores molestiae sed explicabo, impedit facere expedita. Earum officia eaque eius.</p>

        <Link to="/About" className='h-12 w-36 bg-green-300 flex items-center justify-center text-xl font-bold rounded-full mt-10'> About Us </Link>

        </div>




    </div>
  )
}

export default Contact