import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function Protected() {
  const [userId] = useState<string | null>(localStorage.getItem('userId') || null)
  return (
    userId ? <Outlet /> : <Navigate to={'/'}/>
  )
}