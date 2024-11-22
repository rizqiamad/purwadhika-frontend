import { getData } from "@/libs/trackers"

export default async function Table() {
  const data = await getData();

  return (
    <table className="mx-auto mt-4">
      <thead>
        <tr>
          <th className="px-2">No.</th>
          <th className="px-20">Title</th>
          <th className="px-12">Nominal</th>
          <th className="px-6">Type</th>
          <th className="px-8">Category</th>
          <th className="px-6">Date</th>
        </tr>
      </thead>
      <tbody>
        {data.trackers.map((tracker, idx) => {
          return (
            <tr key={idx}>
              <td>{tracker.id}</td>
              <td>{tracker.title}</td>
              <td>{Number(tracker.nominal).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}</td>
              <td>{tracker.type}</td>
              <td>{tracker.category}</td>
              <td>{tracker.date}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}