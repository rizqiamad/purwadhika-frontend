import { useEffect, useState } from "react"
import axios from "../helpers/axios"
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/user";

export default function Users() {
  const navigate = useNavigate()
  const [data, setData] = useState<IUser[]>([]);
  const [reload, setReload] = useState<boolean>(false)

  const getData = async () => {
    try {
      const { data } = await axios.get('/users')
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async (user: IUser) => {
    const confirmSubmit = confirm(`apakah yakin ingin menghapus data ${user.username}?`)
    if (confirmSubmit) {
      try {
        await axios.delete(`/user/${user.id}`)
        setReload(!reload)
        alert(`data ${user.username} berhasil dihapus`)
        navigate('/')
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    getData()
  }, [reload])

  return (
    <div className="flex justify-center py-12">
      <table className="table-auto text-center">
        <thead className="bg-slate-400">
          <tr>
            <th className="py-2 px-4 border border-slate-300">No</th>
            <th className="py-2 px-6 border border-slate-300">Nama</th>
            <th className="py-2 px-20 border border-slate-300">Email</th>
            <th className="py-2 border border-slate-300"></th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user, idx) =>
              <tr key={idx} className="hover:bg-slate-200 hover:cursor-pointer">
                <td className="p-2 border border-slate-300">{idx + 1}</td>
                <td className="p-2 border border-slate-300">{user.username}</td>
                <td className="p-2 border border-slate-300">{user.email}</td>
                <td className="p-2 border border-slate-300">
                  <FaTrash className="text-red-500 hover:scale-[1.3] transition ease-linear" onClick={() => handleDelete(user)} />
                </td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}