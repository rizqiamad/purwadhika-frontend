// import Effect from "./components/effect"
// import RefComp from "./components/ref"
// import State from "./components/state"
// import Memo from "./components/memo"

import { createContext, useState } from "react"
// import Context from "./components/context";
// import ReducerComp from "./components/reducer";
import CallbackComp from "./components/callback";

export const UserContext = createContext<string>('');

function App() {
  const [user] = useState<string>('Andi');
  return (
    <>
      <UserContext.Provider value={user}>
        {/* <State /> */}
        {/* <Effect /> */}
        {/* <RefComp /> */}
        {/* <Memo /> */}
        {/* <Context /> */}
        {/* <ReducerComp /> */}
        <CallbackComp />
      </UserContext.Provider>
    </>
  )
}

export default App
