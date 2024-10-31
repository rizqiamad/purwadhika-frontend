import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoListSharp } from "react-icons/io5";
import { MdOutlineBookmarks } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import X from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex flex-col w-[80%] text-white">
      <div className="flex flex-col py-4 gap-2">
        <div>
          <img src={X} alt="X" className="w-4"/>
        </div>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><IoHomeOutline /></span>
          Home
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><HiMagnifyingGlass /></span>
          Explore
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><IoMdNotificationsOutline /></span>
          Notifications
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><BiMessageSquareDetail /></span>
          Message
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><IoListSharp /></span>
          List
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><MdOutlineBookmarks /></span>
          Bookmarks
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><GoPeople /></span>
          Communities
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><BsLightningCharge /></span>
          Verified Orgs
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><MdOutlinePersonPin /></span>
          Profile
        </Link>
        <Link to={'/'} className="flex items-center gap-2 text-xl">
          <span><CiCircleMore /></span>
          More
        </Link>
      </div>
    </nav>
  )
}