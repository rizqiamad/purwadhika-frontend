import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-16 bg-teal-500 text-white flex gap-6 items-center px-6 justify-center">
      <Link to={'/'} className="hover:-translate-y-1 hover:underline hover:decoration-1">Home</Link>
      <Link to={'/register'} className="hover:-translate-y-1 hover:underline hover:decoration-1">Register</Link>
    </nav>
  )
}