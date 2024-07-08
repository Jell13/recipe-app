import { GiNoodles, GiSteak, GiPizzaSlice, GiChopsticks } from "react-icons/gi"

const Category = () => {
  return (
    <div className="flex gap-4 justify-center items-center text-white">
      <div className="flex flex-col justify-center items-center bg-gray-800">
        <GiSteak/>
        <h3>American</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <GiPizzaSlice/>
        <h3>Italian</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <GiChopsticks/>
        <h3>Japanese</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <GiNoodles/>
        <h3>Chinese</h3>
      </div>
    </div>
  )
}

export default Category
