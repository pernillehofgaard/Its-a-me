import './Navbar.css';
import logo from '../logo.svg';
import { Link } from 'react-router';

export default function Navbar(){
  return(
    <>
      <div className="Bg-img">
      </div>
      <div className="Navbar">
          <a href="/">
              <img src={logo} className="Logo" />
          </a>
          <nav>
            <ul>
              <li><Link to="/Projects">Projects</Link></li>
              <li><Link to="/Hobbies">Hobbies</Link></li>
              <li><Link to="/Contact"></Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>
          </nav>
        </div>
    </>
    
  );
}