import Avatar from "../components/avatar"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"

export default function Home() {
  return (
    <>
      <div className="flex min-h-[100vh] fixed">
        <div className="w-[362px] flex flex-col items-end px-10">
          <Sidebar />
        </div>
        <div className="bg-slate-300 w-[600px] overflow-y-scroll">
          <div className="w-100 bg-yellow-200 h-96"></div>
        </div>  
        <div className="bg-slate-500 grow"></div>
      </div>
    </>
  )
}