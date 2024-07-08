import { GiNoodles, GiSteak, GiPizzaSlice, GiChopsticks } from "react-icons/gi"
import { NavLink } from "react-router-dom"

const Category = () => {
  return (
    <div className="flex gap-4 justify-center items-center text-white">
      <NavLink to={"/cuisine/American"} className="flex flex-col justify-center items-center bg-gray-800">
        <GiSteak/>
        <h3>American</h3>
      </NavLink>
      <NavLink  to={"/cuisine/Italian"} className="flex flex-col justify-center items-center bg-gray-800">
        <GiPizzaSlice/>
        <h3>Italian</h3>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"} className="flex flex-col justify-center items-center bg-gray-800">
        <GiChopsticks/>
        <h3>Japanese</h3>
      </NavLink>
      <NavLink to={"/cuisine/Chinese"} className="flex flex-col justify-center items-center bg-gray-800">
        <GiNoodles/>
        <h3>Chinese</h3>
      </NavLink>
    </div>
  )
}

export default Category
