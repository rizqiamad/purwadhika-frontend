import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Navbar from "./components/navbar"
import Training from "./pages/training"

function App() {
  return (
    <div>
      <Navbar name='Hanif Ahmad'/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/training' element={<Training />}/>
      </Routes>
    </div>
  )
}

export default App
