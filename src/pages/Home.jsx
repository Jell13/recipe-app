import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Beef, Pizza, Salad, Sandwich, Search } from 'lucide-react'
import { data } from 'autoprefixer'
import Popular from '../components/Popular'
import Veggies from '../components/Veggies'

const Home = () => {

  return (
    <div className='h-full w-full'>
      {/* <Navbar/>
      <div className='w-full flex justify-center items-center mt-10'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center bg-gray-800 p-2 gap-3 rounded-lg'>
            <Search className='text-white'/>
            <input type="text" placeholder='Search..' className=' outline-none border-none bg-transparent text-white w-[400px]'/>
          </div>
          <div className='flex gap-2 justify-around'>
            <div className='bg-gray-800 hover:bg-white duration-500 group p-1 rounded-full flex justify-center items-center'>
              <Sandwich className='text-white group-hover:text-gray-800' width={40} height={40}/>
            </div>
            <div className='bg-gray-800 hover:bg-white duration-500 group p-1 rounded-full flex justify-center items-center'>
              <Beef className='text-white group-hover:text-gray-800' width={40} height={40}/>
            </div>
            <div className='bg-gray-800 hover:bg-white duration-500 group p-1 rounded-full flex justify-center items-center'>
              <Salad className='text-white group-hover:text-gray-800' width={40} height={40}/>
            </div>
            <div className='bg-gray-800 hover:bg-white duration-500 group p-1 rounded-full flex justify-center items-center'>
              <Pizza className='text-white group-hover:text-gray-800' width={40} height={40}/>
            </div>
          </div>
         </div>
      </div> */}
      <Veggies/>
      <Popular/>
    </div>
  )
}

export default Home
