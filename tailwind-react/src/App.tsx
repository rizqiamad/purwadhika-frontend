import Logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div className="h-[50px] bg-teal-500 flex justify-between px-10 text-white">
        <div className="content-center">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
        <div className="flex gap-10">
          <p className="content-center">Home</p>
          <p className="content-center">About</p>
          <p className="content-center">Contact</p>
        </div>
        <p className="content-center">Hanif Ahmad</p>
      </div>
    </>
  )
}

export default App
