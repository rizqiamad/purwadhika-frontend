import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import RegisterPage from "./pages/registerPage"
import Protected from "./components/protectedRoute"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route element={<Protected />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
