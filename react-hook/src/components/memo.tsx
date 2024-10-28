import { useMemo, useState } from "react"

export default function Memo(){
  const [count, setCount] = useState<number>(0)
  const [number, setNumber] = useState<number>(0)

  const incCount = () => setCount(count + 1)
  const incNumber = () => setNumber(number + 1)

  const isEvenNumber = useMemo(() => {
    let i = 0
    while (i < 2000000000) {
      i++
    }
    return number % 2 === 0
  },[number])
  return (
    <>
      <button onClick={incNumber}>
        number : {number}
      </button>
      <h1>{isEvenNumber ? 'even' : 'odd'}</h1>
      <button onClick={incCount}> count : {count}</button>
    </>
  )
}