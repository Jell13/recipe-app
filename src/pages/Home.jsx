import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Search } from 'lucide-react'

const Home = () => {

  useEffect(() => {
    getFood()
  },[])

  const getFood = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&number=3`)
    const data = await api.json()

    // console.log(data.recipes)
    data.recipes.map(d => console.log(d.title))
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
    </div>
  )
}

export default Home
