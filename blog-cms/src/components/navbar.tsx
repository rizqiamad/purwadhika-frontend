'use client'

import Image from "next/image";
import Link from "next/link";
import ButtonSignIn from "./buttonSign-in";
import supabase from "@/services/supabase";
import { useSession } from "@/hooks/useSession";

export default function Navbar() {
  const user = useSession()

  const onLogout = () => {
    supabase.auth.signOut()
  }
  return (
    <nav className="flex justify-between px-6 items-center h-16 bg-slate-300">
      <div className="flex items-center gap-4 font-bold">
        <Image src={'https://www.blogger.com/img/logo_blogger_40px_2x.png'} alt="Bloggers" height={40} width={40} />
        <p>BLOGGER</p>
      </div>
      <div className={`gap-4 font-semibold ${user ? `flex` : `hidden`}`}>
        <Link href={'/'} className="hover:text-white">Home</Link>
        <Link href={'/blogs'} className="hover:text-white">Blog</Link>
      </div>
      <div>
        {
          user ? <div className="flex items-center gap-2">
            <div className="flex flex-col text-end">
              <span className="font-semibold ">
                {user.user_metadata.name}
              </span>
              <span>{user.user_metadata.email}</span>
            </div>
            <div>
              <Image src={user.user_metadata.picture} className="rounded-full cursor-pointer" onClick={onLogout} alt="" width={40} height={40} />
            </div>
          </div> : <ButtonSignIn />
        }
      </div>
    </nav>
  )
}