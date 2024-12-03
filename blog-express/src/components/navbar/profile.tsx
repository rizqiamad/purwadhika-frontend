'use client'

import useSession from "@/hooks/useSession";
import { deleteCookies } from "@/libs/action";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoPersonCircle } from "react-icons/io5";

export default function ProfileNavbar() {
  const { user, isAuth } = useSession();
  const router = useRouter();

  const onLogout = () => {
    deleteCookies('token')
    router.push('/login')
  }

  return (
    <>
      {isAuth ? (
        <>
          <div className={`gap-4 font-semibold flex items-center`}>
            <Link href={'/'} className="hover:text-white">Home</Link>
            <Link href={'/blogs'} className="hover:text-white">Blogs</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-end">
              <div>{user?.username}</div>
              <div>{user?.email}</div>
            </div>
            {user?.avatar ? (<Image onClick={onLogout} src={user.avatar} alt={user.username} width={25} height={25} className="w-full h-full cursor-pointer" />) : (<div onClick={onLogout} className="w-[40px] h-[40px] rounded-full"><IoPersonCircle className="w-full h-full cursor-pointer" /></div>)}
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