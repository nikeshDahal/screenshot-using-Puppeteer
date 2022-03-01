import React from "react";
import img from '../images/logo192.png';


//new way . making components
export default function Header() {
    return(
      <header>
        <nav className='navbar'><img src={img} alt="error" className="Logoimg"></img>
        <h3>React Project 1</h3>
        {/* <ul className="list-item">
          <li className="home">Home</li>
          <li id ="About" className="About">About</li>
          <li id="Contact"className="Contact">Contact</li>
  
        </ul> */}
        </nav>
     </header>
    )
    
  }