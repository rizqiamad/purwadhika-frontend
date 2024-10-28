import { useEffect, useState } from "react"

export default function Effect() {
  const [count, setCount] = useState<number>(1);
  const [number, setNumber] = useState<number>(10);

  const getData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      const users = await res.json()
      console.log(users)
    } catch (err) {
      console.log(err)
    }
  }

  const incCount = (e: any) => {
    if (count === 10) {
      e.target.disabled = true;
      alert('There are just 10 data')
    } else {
      setCount(count + 1)
    }
  }

  useEffect(() => {
    getData()
  }, [count])
  return (
    <>
      <h2>count : {count}</h2>
      <button onClick={incCount}>+ count</button>
      <h2>number : {number}</h2>
      <button onClick={() => setNumber(number + 1)}>+ number</button>
    </>
  )
} 