import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Veggies = () => {

  const[veggies, setVeggies] = useState([])
  useEffect(() => {
    getPopularFood()
  },[])

  const getPopularFood = async () => {

    const check = localStorage.getItem("veggies")

    if(check){
      setVeggies(JSON.parse(check))
    }
    else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      const data = await api.json()
      localStorage.setItem("veggies", JSON.stringify(data.recipes))
      setVeggies(data.recipes)
    }
  }

  return (
    <div className='mt-20'>
        <div className='my-16'>
          <h2 className='font-bold text-xl my-8'>Vegetarian picks</h2>
          <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem"
          }}>
          {veggies.map(food => (
            <SplideSlide key={food.id}>
              <div className='overflow-hidden rounded-md relative'>
                <p className='absolute bottom-0 flex justify-center items-center text-center text-white p-2 bg-gray-800 rounded-lg bg-opacity-55'>{food.title}</p>
                <img className='rounded-xl left-0 object-cover w-full' src={food.image} alt="" />
              </div>
            </SplideSlide>
          ))}
          </Splide>
        </div>
    </div>
  )
}

export default Veggies
