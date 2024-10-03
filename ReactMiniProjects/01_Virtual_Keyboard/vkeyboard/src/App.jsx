import { useState } from 'react'
import Keyboard from './components/Keyboard'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-zinc-900 h-fit w-full font-[poppins]'>
        
          <h1 className='text-white text-3xl text-center p-3 font-bold'>VIRTUAL KEYBOARD APP</h1>

        <Keyboard></Keyboard>  
        
      </div>
    </>
  )
}

export default App
