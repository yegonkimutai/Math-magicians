import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav">
            <Link to="/" className="main-title">Math Magicians</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/calculator">Calculator</Link></li>
                <li><Link to="/quotes">Quotes</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar