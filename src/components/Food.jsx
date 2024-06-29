import React from 'react'

const Food = ({food}) => {
  return (
    <div className=''>
        <img src={food.image} alt="" />
      {food.title}
    </div>
  )
}

export default Food
