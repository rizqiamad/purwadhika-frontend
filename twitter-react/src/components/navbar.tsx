import { Link } from "react-router-dom";
import Avatar from "./avatar";

export default function Navbar() {
  return (
    <nav className="h-16 bg-sky-500 flex justify-between items-center gap-6 px-6">
      <div className="flex gap-10">
        <Link to={'/'} className="hover:text-white transition ease-linear">Home</Link>
      </div>
      <div className="flex items-center gap-6">
        <Link to={'/users'} className="hover:text-white transition ease-linear">Users</Link>
        <Avatar />
      </div>
    </nav>
  )
}