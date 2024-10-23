import Button from "../components/button"

function Home() {
  const str: string = 'Hello World!'
  return (
    <>
      <h1>{str}</h1>
      <Button />
    </>
  )
}

export default Home