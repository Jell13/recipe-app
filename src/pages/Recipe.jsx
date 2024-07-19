import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {

    const{ name } = useParams()
    const[details, setDetails] = useState({})

    useEffect(() => {
        getRecipe()
    },[name])

    const getRecipe = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}`)
        const data = await api.json()
        console.log(data)
        setDetails(data)
    }
  return (
    <div className='mt-10'>
        <div className='w-full flex'>
            <div className='flex flex-col'>
                <h3 className='font-bold text-lg'>{details.title}</h3>
            </div>

        </div>
    </div>
  )
}

export default Recipe
