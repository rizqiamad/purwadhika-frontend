import DeleteUser from "@/components/deleteUser"
import { IUser } from "@/types/user"

async function getData(): Promise<{ users: IUser[] }>  {
  const res = await fetch('http://localhost:8000/api/users')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()

}

export default async function UserPage() {
  const data = await getData()
  console.log(data)
  return (
    <div className="flex justify-center py-12">
      <table className="table-auto text-center">
        <thead className="bg-slate-400">
          <tr>
            <th className="py-2 px-4 border border-slate-300">No</th>
            <th className="py-2 px-6 border border-slate-300">Nama</th>
            <th className="py-2 px-20 border border-slate-300">Email</th>
            <th className="border border-slate-300"></th>
          </tr>
        </thead>
        <tbody>
          {
            data.users.map((user, idx) =>
              <tr key={idx} className="hover:bg-slate-200 hover:cursor-pointer">
                <td className="p-2 border border-slate-300">{idx + 1}</td>
                <td className="p-2 border border-slate-300">{user.name}</td>
                <td className="p-2 border border-slate-300">{user.email}</td>
                <DeleteUser id={user.id}/>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}