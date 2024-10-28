import { useEffect, useState } from "react"
import { IData } from "./types/type";

export default function Training() {
  const [data, setData] = useState<IData[]>([]);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    console.log('render')
  },[])
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (<tr key={idx}><td>{item.name}</td><td>{item.email}</td><td>{item.phone}</td><td>{item.website}</td></tr>))}
        </tbody>
      </table>
      <button style={{width:'100px', height:'50px'}} onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}