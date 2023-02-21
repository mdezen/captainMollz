import './App.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function Navbar() {

  return (
    <nav>
      <ul className="nav-list">
        
        <Link to="/" className='nav-item'>
          <img className="coors-mountain" src="coors_mountain.png">
          </img>
        </Link>
          
        <CustomLink to= "/Vote" className='nav-item'>VOTE</CustomLink>
        <CustomLink to= "/Donate" className='nav-item'>DONATE</CustomLink>
        <CustomLink to= "/Contact" className='nav-item'>CONTACT</CustomLink>
        
      </ul>
    </nav>

  )
}

export default Navbar

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
