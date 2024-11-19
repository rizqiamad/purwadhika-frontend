'use client'

import { MdDeleteOutline } from "react-icons/md"

export default function DeleteUser({ id }: { id: number }) {

  const onDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/users/${id}`, {
        method: "DELETE"
      })
      const data = await res.json()
      console.log(data)
    } catch (err) { 
      console.log(err)
    }
  }

  return (
    <td className="p-2 border border-slate-300" onClick={onDelete}>
      <MdDeleteOutline className="text-red-500 hover:scale-[1.2] w-5 h-5 transition ease-linear" />
    </td>
  )
}