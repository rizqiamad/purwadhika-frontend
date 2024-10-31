import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Profile from "./pages/register"
import RegisterPage from "./pages/register"
import Users from "./pages/users"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
