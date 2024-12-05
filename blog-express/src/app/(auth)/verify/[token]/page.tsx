'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function VerifyPage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const onVerify = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/auth/verify/${params.token}`, {
        method: "PATCH"
      })
      const result = await res.json()

      if (!res.ok) throw result

      toast.success(result.message)
      router.push('/login')
    } catch (err: any) {
      console.log(err);
      toast.error(err.message)
      router.push('/register')
    }
  }

  useEffect(() => {
    onVerify()
  }, [])

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button onClick={onVerify} className="py-2 px-4 rounded-md bg-blue-500 font-semibold text-white">Verifikasi</button>
    </div>
  )
}