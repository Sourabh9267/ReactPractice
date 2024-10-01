import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../componants/Home'
import About from '../componants/About'
import Contact from '../componants/Contact'
import User from '../componants/User'
import Users from '../componants/Users'


function Routing() {
  return (
    <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Users" element={<Users/>}>
        <Route path="/Users/:name" element={<User/>}></Route>
      </Route>
      

    </Routes>
  )
}

export default Routing