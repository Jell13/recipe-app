import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cuisine/:type' element={<Cuisine/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
        <Route path='/recipes/:name' element={<Recipe/>}/>
    </Routes>
  )
}

export default Pages
