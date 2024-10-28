import { useContext } from "react"
import { UserContext } from "../App"

export default function DisplayComp() {
  const user = useContext(UserContext)
  return (
    <h1>
      Hallo {user}
    </h1>
  )
}