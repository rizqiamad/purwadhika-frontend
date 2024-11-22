'use client'

export default function Form() {
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const formProps = Object.fromEntries(form)
    try {
      const res = await fetch('http://localhost:8000/api/trackers', {
        method: 'POST',
        next: { revalidate: 0 },
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formProps)
      })
      const data = await res.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="flex flex-col gap-4 w-[400px] bg-slate-200 mx-auto mt-12 p-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label><br />
        <input type="text" id="title" name="title" placeholder="Title" />
      </div>
      <div>
        <label htmlFor="nominal">Nominal</label><br />
        <input type="text" id="nominal" name="nominal" placeholder="Nominal" />
      </div>
      <div>
        <p>Type</p>
        <div className="flex gap-2">
          <span>
            <input type="radio" id="income" name="type" value={'income'} className="cursor-pointer" />
            <label htmlFor="income">Income</label>
          </span>
          <span>
            <input type="radio" id="expense" name="type" value={'expense'} className="cursor-pointer" />
            <label htmlFor="expense">Expense</label>
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="category">Category</label><br />
        <select name="category" id="category" className="cursor-pointer">
          <option value="salary">Salary</option>
          <option value="transportation">Transportation</option>
          <option value="food">Food</option>
        </select>
      </div>
      <div>
        <label htmlFor="date">Date</label><br />
        <input type="date" id="date" name="date" className="cursor-pointer" />
      </div>
      <input type="submit" className="py-2 bg-white cursor-pointer" />
    </form>
  )
}