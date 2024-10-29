import { RootState } from "../store/store"
import { useSelector } from "react-redux"

export default function DisplayCounter() {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <h1>
      {count}
    </h1>
  )
}