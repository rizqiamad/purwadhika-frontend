import { useRef } from "react";
import Register from "./register";

export default function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    dialogRef.current?.showModal()
  }

  return (
    <>
      <button className="h-10 rounded-3xl bg-[#1d9bf0] text-white font-semibold" onClick={openModal}>Buat akun</button>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box bg-black">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <Register />
        </div>
      </dialog>
    </>
  )
}