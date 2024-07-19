import React, { useState } from 'react'
import { BsWindowSidebar } from 'react-icons/bs'
import { useNavigation } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Search = () => {

  const[input, setInput] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    window.alert('Hey')

  }
  return (
    <div className='h-full w-full flex justify-center items-center mt-20'>
        <form onSubmit={submitHandler} className='flex gap-2 w-[500px] bg-gradient-to-r from-[#494949] to-[#313131] justify-center items-center rounded-xl px-2'>
            <FaSearch className='text-white' size={25}/>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Search...' className='w-full bg-transparent p-2 outline-none border-none text-white'/>
        </form>
    </div>
   
  )
}

export default Search
