'use client'

import useSession from "@/hooks/useSession";
import { deleteCookies } from "@/libs/action";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";

export default function ProfileNavbar() {
  const { user, isAuth, setIsAuth } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onLogout = () => {
    deleteCookies('token')
    setIsAuth(!isAuth)
    // router.refresh()
    router.push('/login')
    router.refresh()
  }

  const onOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = () => {
    if (isOpen) {
      onOpen()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, [isOpen])

  return (
    <>
      {isAuth ? (
        <>
          <div className={`gap-4 font-semibold flex items-center`}>
            <Link href={'/'} className="hover:text-white">Home</Link>
            <Link href={'/blogs'} className="hover:text-white">Blogs</Link>
          </div>
          <div className="flex items-center gap-3 relative">
            <div className="text-end">
              <div>{user?.username}</div>
              <div>{user?.email}</div>
            </div>
            {user?.avatar ? (<Image onClick={onOpen} src={user.avatar} alt={user.username} width={25} height={25} className="w-[40px] h-[40px] rounded-full cursor-pointer" />) : (<div onClick={onOpen} className="w-[40px] h-[40px] rounded-full"><IoPersonCircle className="w-full h-full cursor-pointer" /></div>)}
            <div className={`flex flex-col absolute overflow-hidden right-0 top-16 bg-slate-300 text-black rounded-md w-56 ${isOpen ? '' : 'hidden'}`}>
              <Link href={'/profile'} className="hover:bg-slate-400 p-2 text-center">Profile</Link>
              {user?.role == "Admin" && <Link href={'/dashboard'} className="hover:bg-slate-400 p-2 text-center">Dashboard</Link>}
              <button className="text-red-500 hover:bg-red-400 hover:text-white p-2" onClick={onLogout}>Logout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex gap-4">
          <Link href={'/register'} className="py-2 px-4 font-semibold rounded-md border border-slate-400">Register</Link>
          <Link href={'/login'} className="py-2 px-4 bg-[#f67d01] text-white font-semibold rounded-md">Login</Link>
        </div>
      )}
    </>
  )
}