import { useState } from "react"
import { useNavigate } from "react-router-dom";

interface Initial{
  initial: string | undefined
}

export default function Avatar({ initial }:Initial) {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId')
    navigate('/')
  }

  return (
    <div className="avatar placeholder cursor-pointer relative">
      <div className="bg-neutral text-neutral-content w-12 rounded-full" onClick={() => setOpen(!open)}>
        <span>{initial}</span>
      </div>
      <ul className={`absolute py-1 hover:opacity-[0.8] bg-black w-28 text-center -left-6 -top-10 text-white rounded-md border border-slate-200 ${open ? '' : 'hidden'}`}>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  )
}