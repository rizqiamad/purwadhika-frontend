import './navbar.css'
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

interface IProp {
  name: string
}

function Navbar(props: IProp) {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className='nav-center'>
        <p>
          <Link to='/home'>Home</Link>
        </p>
        <p>
          <Link to='/about'>About</Link>
        </p>
        <p>
          <Link to='/contact'>Contact</Link>
        </p>
      </div>
      <p>Hello {props.name}</p>
    </nav>
  )
}

export default Navbar