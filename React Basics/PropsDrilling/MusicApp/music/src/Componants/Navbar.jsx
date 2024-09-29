import React from 'react'

function Navbar({data}) {
  return (
    <div className='h-32 w-full flex items-center justify-between'>

        <h2 className='text-5xl font-bold ml-10 text-orange-300'>MUSICee</h2>
        <div className='h-12 w-44 rounded-full bg-orange-300 mr-20 flex items-center justify-center '>Favourites {data.filter(item=>item.isFav).length}</div>

    </div>
   )
}

export default Navbar