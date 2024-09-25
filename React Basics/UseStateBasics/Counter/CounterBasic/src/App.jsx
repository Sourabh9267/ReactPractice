import { useState } from 'react'


function App() {
  const [val, setVal] = useState(0)

  return (
  
      <>
      <div className="main bg-zinc-300 h-screen justify-center items-center flex flex-col gap-4">
      <h1 className='text-lg  h-10 font-bold mt-2 mb-4 w-32'>Basic Counter</h1>

      <div>
        <h5 className='text-lg w-30 h-10'>Current Count: {val} </h5>
      </div>
      
      <div className="main flex  gap-6 flex-col">
        <button onClick={() => setVal((prev) => prev + 1)}  className='bg-green-300 h-8 w-28 font-bold rounded-full'> Increment + </button>
        <button onClick={() => setVal((prev) => prev - 1)}  className='bg-red-300 h-8 w-28 font-bold rounded-full'> Decrement - </button>
        <button onClick={() => setVal(0)}  className='bg-yellow-300 h-8 w-28 font-bold rounded-full'>Reset </button>
      
      </div>
        
      </div>
      
     
     </>
  )
}

export default App
