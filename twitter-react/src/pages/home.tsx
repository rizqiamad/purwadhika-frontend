import Avatar from "../components/avatar"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"

export default function Home() {
  return (
    <>
      <div className="flex min-h-[100vh] fixed">
        <div className="max-w-[22.6rem] flex flex-col items-end px-16 max-xl:w-0">
          <Sidebar />
        </div>
        <div className="bg-slate-300 min-w-[37.5rem] overflow-y-scroll">
        </div>  
        <div className="bg-slate-500 grow"></div>
      </div>
    </>
  )
}