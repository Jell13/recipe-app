import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Popular = () => {

  const[popular, setPopular] = useState([])
  useEffect(() => {
    getPopularFood()
  },[])

  const getPopularFood = async () => {

    const check = localStorage.getItem("popular")

    if(check){
      setPopular(JSON.parse(check))
    }
    else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&number=9`)
      const data = await api.json()
      localStorage.setItem("popular", JSON.stringify(data.recipes))
      setPopular(data.recipes)
    }
  }

  return (
    <div className='mt-20'>
        <div className='my-16'>
          <h2 className='font-bold text-xl my-8'>Popular Food</h2>
          <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem"
          }}>
          {popular.map(food => (
            <SplideSlide key={food.id}>
              <div className='overflow-hidden rounded-md relative'>
                <p className='absolute bottom-0 flex justify-center items-center text-center text-white p-2 bg-transparent bg-gray-700 rounded-lg bg-opacity-40'>{food.title}</p>
                <img className='rounded-xl left-0 object-cover w-full' src={food.image} alt="" />
                <div className='w-full h-full '></div>
              </div>
            </SplideSlide>
          ))}
          </Splide>
        </div>
    </div>
  )
}

export default Popular
