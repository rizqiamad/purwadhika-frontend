'use client'
import { signInWithGoogle } from "@/libs/auth";
import { FcGoogle } from "react-icons/fc";

export default function ButtonSignIn() {
  return (
    <button
      onClick={signInWithGoogle}
      className="flex items-center gap-1 font-semibold rounded-2xl hover:bg-slate-400 px-1 py-1 border border-slate-400"
    >
      <FcGoogle className="w-5 h-5" /> Sign-in
    </button>
  )
}