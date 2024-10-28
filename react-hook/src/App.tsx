// import Effect from "./components/effect"
// import RefComp from "./components/ref"
// import State from "./components/state"
// import Memo from "./components/memo"

import { useState } from "react"
import Context from "./components/context";


function App() {
  const [user, setUser] = useState<string>('Andi');
  return (
    <>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <RefComp /> */}
      {/* <Memo /> */}
      <Context />
    </>
  )
}

export default App
