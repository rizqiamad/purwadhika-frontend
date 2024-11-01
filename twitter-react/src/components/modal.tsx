import { ReactElement, useRef } from "react";

interface Child{
  children: ReactElement
  style: string
  name: string
}

export default function Modal({ children, style, name }:Child) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    dialogRef.current?.showModal()
  }

  return (
    <>
      <button className={`h-10 rounded-3xl ${style} text-white font-semibold`} onClick={openModal}>{name}</button>
      <dialog ref={dialogRef} id="my_modal_3" className="modal">
        <div className="modal-box bg-black">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  )
}