import { useEffect, useState } from "react"
import axios from "../helpers/axios"
import { FaTrash } from "react-icons/fa";
import { IUser } from "../types/user";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [data, setData] = useState<IUser[]>([]);
  const [reload, setReload] = useState<boolean>(false)
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await axios.get('/users')
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async (user: IUser) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    if (result.isConfirmed) {
      try {
        await axios.delete(`/users/${user.id}`)
        await Swal.fire({
          title: "Deleted!",
          text: `data ${user.username} has been deleted`,
          icon: "success"
        });
        setReload(!reload)
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
                <td className="p-2 border border-slate-300" onClick={() => navigate(`/home/${user.id}`)}>{idx + 1}</td>
                <td className="p-2 border border-slate-300" onClick={() => navigate(`/home/${user.id}`)}>{user.username}</td>
                <td className="p-2 border border-slate-300" onClick={() => navigate(`/home/${user.id}`)}>{user.email}</td>
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