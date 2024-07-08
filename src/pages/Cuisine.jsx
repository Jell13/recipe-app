import React from 'react'
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"

const Cuisine = () => {

  const params = useParams()
  console.log(params)
  return (
    <div>
      {params.type}
    </div>
  )
}

export default Cuisine
