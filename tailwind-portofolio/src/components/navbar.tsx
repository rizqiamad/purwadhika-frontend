import { useState, useEffect } from "react";
import ThemeController from "./themeController";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Pasang event listener saat komponen mount
    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navbar dark:bg-slate-950  fixed top-0 z-10 transition-all duration-300 ${scrollPosition === 0 ? 'dark:bg-transparent bg-transparent text-white' : 'bg-white'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href="#home" className="dark:text-white">Home</a></li>
            <li><a href="#about" className="dark:text-white">About</a></li>
            <li><a href="#contact" className="dark:text-white">Contact</a></li>
          </ul>
        </div>
      <a className="btn btn-ghost text-xl dark:text-white">Hanif Ahmad</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#home" className="dark:text-white">Home</a></li>
          <li><a href="#about" className="dark:text-white">About</a></li>
          <li><a href="#contact" className="dark:text-white">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController />
      </div>
    </div>
  )
}