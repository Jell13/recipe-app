import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"

const Cuisine = () => {

  const params = useParams()
  const[cuisine, setCuisine] = useState([])

  useEffect(() => {
    getRecipe(params.type)
    console.log(cuisine)
  },[params.type])
  
  const getRecipe = async (name) => {

    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&cuisine=${name}`)
    const data = await api.json()
    setCuisine(data.results)
  }

  return (
    <div className='grid items-center justify-center grid-cols-3 gap-12 mt-20'>
      {cuisine.map(food => (
        <div>
          <img src={food.image} className='rounded-[2rem]' alt="" />
          <h4 className='p-4'>{food.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default Cuisine
