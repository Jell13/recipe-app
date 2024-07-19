import { GiNoodles, GiSteak, GiPizzaSlice, GiChopsticks } from "react-icons/gi"
import { NavLink } from "react-router-dom"

const Category = () => {
  return (
    <div className="flex gap-10 justify-center items-center text-white mt-10">
      <NavLink to={"/cuisine/american"} className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-gradient-to-r from-[#494949] to-[#313131] hover:bg-slate-400 duration-500">
        <GiSteak size={30}/>
        <h3 className="text-sm">American</h3>
      </NavLink>
      <NavLink  to={"/cuisine/italian"} className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-gradient-to-r from-[#494949] to-[#313131]">
        <GiPizzaSlice size={30}/>
        <h3 className="text-sm">Italian</h3>
      </NavLink>
      <NavLink to={"/cuisine/japanese"} className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-gradient-to-r from-[#494949] to-[#313131]">
        <GiChopsticks size={30}/>
        <h3 className="text-sm">Japanese</h3>
      </NavLink>
      <NavLink to={"/cuisine/chinese"} className="flex flex-col justify-center items-center w-20 h-20 rounded-full bg-gradient-to-r from-[#494949] to-[#313131]">
        <GiNoodles  size={30}/>
        <h3 className="text-sm">Chinese</h3>
      </NavLink>
    </div>
  )
}

export default Category
