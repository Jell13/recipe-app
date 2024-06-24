import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Search } from 'lucide-react'
import Random from './Random'

const Home = () => {

  useEffect(() => {
    getRandomFood()
  },[])

  const getRandomFood = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&number=3`)
    const data = await api.json()

    return data
  }
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
