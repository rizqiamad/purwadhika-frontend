import { useState } from "react"

export default function State() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>{name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
    </>
  )
}