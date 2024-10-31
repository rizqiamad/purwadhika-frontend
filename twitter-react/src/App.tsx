import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Profile from "./pages/register"
import RegisterPage from "./pages/register"
import Users from "./pages/users"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
