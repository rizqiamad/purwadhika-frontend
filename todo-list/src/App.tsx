import { useEffect, useRef, useState } from "react"
import { ITodo } from "./types/todo"
import Todos from "./components/todos"

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [done, setDone] = useState<number>(0)
  const [todo, setTodo] = useState<ITodo[]>(localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [
    { desc: 'Coding', isDone: false },
    { desc: 'Eat', isDone: false },
    { desc: 'Sleep', isDone: false },
    { desc: 'Repeat', isDone: false },
  ])

  const saveLocal = () => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }

  useEffect(() => {
    let i = 0
    todo.forEach(item => {
      item.isDone ? i++ : i
    })
    setDone(i)
    saveLocal()
    const handleKeydown = (e: any) => {
      if (e.key === 'Enter') {
        addHandle()
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [todo])

  const addHandle = () => {
    if (inputRef.current && inputRef.current.value) {
      const newTodo: ITodo = {
        desc: inputRef.current.value,
        isDone: false
      }
      setTodo([...todo, newTodo])
      inputRef.current.value = ''
    }
  }

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500">
      <main className="flex flex-col items-center px-10 pb-10 bg-slate-400 bg-gradient-to-r from-lime-500 to-green-500 rounded-md gap-3">
        <h1 className="text-[4rem] font-bold text-blue-500">
          To<span className="text-red-500">Do</span> List
        </h1>
        <Todos todos={todo} setTodo={setTodo} saveLocal={saveLocal} />
        <div className="bg-black text-white px-10 py-3 rounded-xl">Done : <span>{done}</span></div>
        <div className="flex w-96 h-[3rem]">
          <input ref={inputRef} type="text" placeholder="Add todo here" className="w-full rounded-lg px-3 outline-none border-blue-500 border-solid border-2" />
          <button onClick={addHandle} className="ml-2 rounded-md bg-blue-500 w-[3rem] h-[3rem]">Add</button>
        </div>
      </main>
    </div>
  )
}

export default App
