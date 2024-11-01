import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { MdOutlinePersonPin } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import X from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex flex-col w-[80%] text-white">
      <div className="flex flex-col py-4 gap-4">
        <div>
          <img src={X} alt="X" className="w-6 cursor-pointer"/>
        </div>
        <Link to={'/'} className="flex items-center gap-2 text-2xl">
          <span className="max-xl:inline"><IoHomeOutline className='text-3xl'/></span>
          <span className={`max-xl:hidden`}>Home</span>
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-2xl">
          <span><HiMagnifyingGlass className='text-3xl'/></span>
          <span className={`max-xl:hidden`}>Explore</span>
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-2xl">
          <span><IoMdNotificationsOutline className='text-3xl'/></span>
          <span className={`max-xl:hidden`}>Notification</span>
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-2xl">
          <span><BiMessageSquareDetail className='text-3xl'/></span>
          <span className={`max-xl:hidden`}>Message</span>
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-2xl">
          <span><IoListSharp className='text-3xl'/></span>
          <span className={`max-xl:hidden`}>List</span>
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-2xl">
          <span><MdOutlinePersonPin className='text-3xl'/></span>
          <span className={`max-xl:hidden`}>Profile</span>
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-2xl">
          <span><CiCircleMore className='text-3xl'/></span>
          <span className={`max-xl:hidden`}>More</span>
        </Link>
      </div>
    </nav>
  )
}