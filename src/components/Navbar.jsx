import React from 'react'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className ='logo'>
<h1>LOGO</h1>
      </div>
      <div className="navlink">
      <nav>
        <ul>
         <NavLink to ='/'>Home</NavLink>
          <NavLink to ='/contact'>Contact us</NavLink>
           <NavLink to ='/about'>About us</NavLink>
        </ul>
      </nav>
       
      </div>

      <div className="register">

        <button className='signup-btn'>Sign up</button>
      </div>

    </div>
  )
}

export default Navbar