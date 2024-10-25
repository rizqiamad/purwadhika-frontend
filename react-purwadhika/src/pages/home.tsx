import './home.css'
import Hanif from "../assets/hanifahmad.png";

function Home() {
  return (
    <main className='main-home'>
      <div className="text">
        <div className="circle"></div>
        <h1>I'm Hanif Ahmad!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, deserunt ut autem, culpa nostrum corporis nam, id vero exercitationem natus error voluptatem? Recusandae, dolorem placeat?</p>
        <button>READ MORE</button>
      </div>
      <img src={Hanif} alt="Hanif" />
    </main>
  )
}

export default Home