import { useEffect, useRef, useState } from "react"

export default function RefComp() {
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show)
    if (passwordRef.current) {
      passwordRef.current.type = !show ? 'text' : 'password'
    }
  }

  useEffect(() => {
    passwordRef.current?.focus()
  }, [])
  return (
    <>
      <input
        type="password"
        placeholder="Enter your password"
        ref={passwordRef}
      />
      <button onClick={handleShow}>{show ? 'hide' : 'show'}</button>
    </>
  )
}