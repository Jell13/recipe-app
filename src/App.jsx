
import { BrowserRouter } from "react-router-dom"
import Category from "./components/Category"
import Search from "./components/Search"
import Home from "./pages/Home"
import Pages from "./pages/Pages"

function App() {

  return (
    <>
      <div className="lg:px-32 px-12">
        <BrowserRouter>
          <Search/>
          <Category/>
          <Pages/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
