import React, { useEffect, useState } from 'react'
import Food from '../components/Food'

const Random = () => {

  const[random, setRandom] = useState([])
  useEffect(() => {
    getRandomFood()
  },[])

  const getRandomFood = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&number=9`)
    const data = await api.json()
    console.log(data.recipes)
    setRandom(data.recipes)
  }

  return (
    <div className='w-full h-full mt-20'>
      <div className='flex flex-col'>
        Random
        <div className='grid grid-cols-3 gap-3'>
          {random.map(food => (
            <div>
              <div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Random
