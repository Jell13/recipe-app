import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { useParams } from 'react-router-dom'

const Searched = () => {

    const {search} = useParams()
    const[food, setFood] = useState([])

    useEffect(() => {
        getRecipe()
        console.log(food)
    },[search])

    const getRecipe = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&query=${search}`)
        const data = await api.json()
        setFood(data.results)
    }

  return (
    <div className='grid items-center justify-center grid-cols-3 gap-12 mt-20'>
      {food.map(foo => (
        <div className='' key={foo.id}>
          <img src={foo.image} className='rounded-[2rem]' alt="" />
          <h4 className='p-4'>{foo.title}</h4>
        </div>
      ))}
    </div>
  )
}

export default Searched
