import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Profile from "./pages/register"
import RegisterPage from "./pages/register"
import Users from "./pages/users"
import ProtectedRoute from "./utils/protectedRoute"
import { useState } from "react"

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage onRegister={() => setIsRegistered(true)} />} />
        <Route path="/" element={<ProtectedRoute isRegistered={isRegistered}><Home /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute isRegistered={isRegistered}><Users /></ProtectedRoute>} />
        <Route path="/profile/:id" element={<ProtectedRoute isRegistered={isRegistered}><Profile /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
