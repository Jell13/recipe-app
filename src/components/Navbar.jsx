import { UtensilsCrossed } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-24 w-full'>
      <div className='h-full w-full flex items-center'>
        <div className='flex gap-2 justify-center items-center'>
            <UtensilsCrossed/>
            <h1 className='text-2xl font-bold'>Delicious</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
