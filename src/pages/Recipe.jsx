import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {

    const{ name } = useParams()
    const[details, setDetails] = useState({})
    const[activeTab, setActiveTab] = useState("instructions")

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
    <div className='mt-10 pb-10'>
        <div className='w-full flex gap-14'>
            <div className='flex flex-col gap-6'>
                <h3 className='font-bold text-lg'>{details.title}</h3>
                <img className='w-[400px] rounded-' src={details.image} alt="" />
            </div>
            <div className='w-[500px] flex flex-col gap-6'>
                <div className='flex gap-6'>
                    <button onClick={() => setActiveTab("instructions")} className={`[&.active]:bg-gradient-to-r [&.active]:text-white  [&.active]:from-[#494949] [&.active]:to-[#313131] py-4 px-8 border-2 border-[#313131] ${activeTab === 'instructions' ? "active" : ""}`}>Instructions</button>
                    <button onClick={() => setActiveTab("ingredients")} className={`[&.active]:bg-gradient-to-r [&.active]:text-white  [&.active]:from-[#494949] [&.active]:to-[#313131] py-4 px-8 border-2 border-[#313131] ${activeTab === 'ingredients' ? "active" : ""}`}>Ingredients</button>
                </div>

                {activeTab === "instructions" ? 
                <div>
                    <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                </div> : 
                <ul>
                    {details.extendedIngredients.map(i => (
                        <li className='list-disc' key={i.id}>{i.original}</li>
                    ))}
                </ul>}
                
                
            </div>
        </div>
    </div>
  )
}

export default Recipe
