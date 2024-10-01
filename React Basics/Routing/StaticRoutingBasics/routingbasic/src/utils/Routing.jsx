import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../componants/Home'
import About from '../componants/About'
import Contact from '../componants/Contact' 



function Routing() {
  return (

    <Routes>
  
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Contact" element={<Contact />} />
        
    </Routes>
  )
}

export default Routing