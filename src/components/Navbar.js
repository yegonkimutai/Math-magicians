import { useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const navRef =  useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }

  return (
    <header className="nav">
      <Link to="/" className="main-title">Math Magicians</Link>
      <nav ref={navRef} className='nav-links'>
      <ul className='home-links' onClick={showNavbar}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
      </ul>
      <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
    <button className='nav-btn nav-open-btn' onClick={showNavbar}>
      <FaBars />
    </button>
    </header>
  );
}


export default Navbar;
