import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Popular = () => {

  const[popular, setPopular] = useState([])
  useEffect(() => {
    getPopularFood()
  },[])

  const getPopularFood = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&number=9`)
    const data = await api.json()
    console.log(data.recipes)
    setPopular(data.recipes)
  }

  return (
    <div className='w-full h-full mt-20'>
        <div className=' my-16'>
          <h2 className='font-bold text-xl'>Popular Food</h2>
          <Splide>
          {popular.map(food => (
            <SplideSlide>
              <div className=' overflow-hidden min-h-96 rounded-md'>
                <h3 className='font-medium'>{food.title}</h3>
                <img className='rounded-xl' src={food.image} alt="" />
              </div>
            </SplideSlide>
          ))}
          </Splide>
        </div>
    </div>
  )
}

export default Popular
