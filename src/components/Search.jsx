import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className='h-full w-full flex justify-center items-center mt-20'>
        <form action="" className='flex gap-2 w-[500px] bg-gray-800 justify-center items-center rounded-xl px-2'>
            <FaSearch className='text-white' size={25}/>
            <input type="text" placeholder='Search...' className='w-full bg-transparent p-2'/>
        </form>
    </div>
   
  )
}

export default Search
