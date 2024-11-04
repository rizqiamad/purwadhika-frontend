import { IUser } from "@/types/user"

async function getData() {
  const res = await fetch('http://localhost:2000/users')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function UserPage() {
  const data:IUser[] = await getData()
  console.log(data)
  return (
    <div className="flex justify-center py-12">
      <table className="table-auto text-center">
        <thead className="bg-slate-400">
          <tr>
            <th className="py-2 px-4 border border-slate-300">No</th>
            <th className="py-2 px-6 border border-slate-300">Nama</th>
            <th className="py-2 px-20 border border-slate-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user, idx) =>
              <tr key={idx} className="hover:bg-slate-200 hover:cursor-pointer">
                <td className="p-2 border border-slate-300">{idx + 1}</td>
                <td className="p-2 border border-slate-300">{user.username}</td>
                <td className="p-2 border border-slate-300">{user.email}</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}