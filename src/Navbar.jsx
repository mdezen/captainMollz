

import './App.css';
function Navbar() {
  

  return (
    // <div className= "nav">  
    //   <div className= "nav-button">
    //   <div>CMB</div>

    //    <button>Button1</button>
    //    <button>Button2</button>
    //    <button>Button3</button>
    //    </div>

    // </div>

    <nav>
      <ul className="nav-list">
        <li className='nav-item'>
          <img className="coors-mountain" src="coors_mountain.png"></img>
          </li>
        <li className='nav-item'>Vote</li>
        <li className='nav-item'>Donate</li>
        <li className='nav-item'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
