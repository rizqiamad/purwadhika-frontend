import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import RegisterPage from "./pages/registerPage"
import Users from "./pages/users"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/home/:id" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
