import Avatar from "./avatar";
import Navbar from "./navbar";

export default function Sidebar() {
  return (
    <>
      <Navbar />
      <div className="w-[80%] h-32">
        <button className="text-white bg-[#1d9bf0] w-[100%] h-12 rounded-3xl">POST</button>
      </div>
      <div className="w-[80%] flex items-center gap-2">
        <Avatar />
        <div>
          <h1 className="text-white">Andi</h1>
          <h1 className="text-white">@andipermana</h1>
        </div>
      </div>
    </>
  )
}