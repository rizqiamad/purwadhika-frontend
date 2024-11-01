import { useEffect, useState } from "react";
import Avatar from "./avatar";
import Navbar from "./navbar";
import axios from "../helpers/axios";
import { IUser } from "../types/user";

export default function Sidebar() {
  const [userId] = useState<string | null>(localStorage.getItem('userId'));
  const [dataUser, setDataUser] = useState<IUser>();

  const getData = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`)
      setDataUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  },[])
  return (
    <>
      <Navbar />
      <div className="w-[80%] h-32">
        <button className="text-white bg-[#1d9bf0] w-[100%] h-12 rounded-3xl">POST</button>
      </div>
      <div className="w-[80%] flex items-center gap-2">
        <Avatar initial={dataUser?.username.charAt(0).toUpperCase()}/>
        <div>
          <h1 className="text-white">{dataUser?.username}</h1>
          <h1 className="text-white">{dataUser?.email}</h1>
        </div>
      </div>
    </>
  )
}