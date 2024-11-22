'use client'

import supabase from "@/services/supabase"
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react"

export default function LoginCheck() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      // console.log(session)
      setUser(session?.user)
    })
  }
  useEffect(()=>{
    getSession()
  })
  return (
    <div className={`${user ? 'hidden' : ''} absolute bg-black opacity-[0.8] top-0 bottom-0 right-0 left-0 flex justify-center items-center`}>
      <div className="bg-white h-36 w-80 text-center content-center font-semibold text-2xl">
        Login terlebih dahulu menggunakan akun gmail
      </div>
    </div>
  )
}