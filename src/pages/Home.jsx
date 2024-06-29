import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Search } from 'lucide-react'
import Random from './Random'
import { data } from 'autoprefixer'

const Home = () => {

  return (
    <div className='h-full w-full'>
      <Navbar/>
      <div className='w-full flex justify-center items-center mt-10'>
         <div className='flex items-center bg-gray-800 p-2 gap-3 rounded-lg'>
          <Search className='text-white'/>
          <input type="text" placeholder='Search..' className=' outline-none border-none bg-transparent text-white w-[400px]'/>
         </div>
      </div>
      <Random/>
    </div>
  )
}

export default Home
