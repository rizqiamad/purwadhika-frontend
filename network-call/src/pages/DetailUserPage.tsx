import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IUser } from "../types/user"
import axios from "../helpers/axios"

export default function DetailUserPage() {
  const [user, setUser] = useState<IUser | null>(null)
  const { id } = useParams()

  const getData = async () => {
    try {
      const { data } = await axios.get(`/user/${id}`)
      setUser(data) 
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>{user?.username}</h1>
    </div>
  )
}