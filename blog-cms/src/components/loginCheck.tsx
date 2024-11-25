'use client'

import { useSession } from "@/hooks/useSession"

export default function LoginCheck() {
  const user = useSession()
  return (
    <div className={`${user ? 'hidden' : ''} absolute bg-black opacity-[0.8] top-0 bottom-0 right-0 left-0 flex justify-center items-center`}>
      <div className="bg-white h-36 w-80 text-center content-center font-semibold text-2xl">
        Login terlebih dahulu menggunakan akun gmail
      </div>
    </div>
  )
}