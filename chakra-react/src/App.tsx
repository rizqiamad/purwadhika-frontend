import { Flex } from "@chakra-ui/react"
import DemoDrawer from "./components/ui/myComp/drawer"
import { Avatar } from "./components/ui/avatar"
import MyAccordion from "./components/ui/myComp/accordion"

function App() {
  return (
    <div>
      <Flex
        bgColor={'teal'}
        h={'60px'}
        justifyContent={'space-between'}
        px={'20px'}
        alignItems={'center'}
      >
        <DemoDrawer />
        <Avatar />
      </Flex>
      <MyAccordion />
    </div>
  )
}

export default App
