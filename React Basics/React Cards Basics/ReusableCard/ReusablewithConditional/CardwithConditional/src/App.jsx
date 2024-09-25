import React from 'react'
import CardC from './Componants/CardC'


function App() {
  return (
    <>
    <div className="infotext bg-zinc-300 flex justify-center flex-col items-center p-10">
      <h2>Reusable Card with  Conditional Rendering</h2>
      <p>The Current Stocks value is shown with Green color only if current stocks are &gt; 10000 otherwise it is shown with Red color</p>
      <p>Also the Order Service button is shown with Green color only if isOut value is false otherwise it's shown with Red Color</p>


    </div>

    <div className='bg-zinc-300 h-screen w-full flex items-center justify-center font-[poppins]'>
      
    <CardC/>

    </div>
    </>
  )
}

export default App