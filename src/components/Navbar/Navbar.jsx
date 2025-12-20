import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <header>
            <div className="logo">
                <h2>Bear Scene</h2>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </nav> 
            <div className="login-btn">
                <a href="#">Sign In</a>
                <button>Sign Up</button>
            </div>
        </header>
    </div>
  )
}

export default Navbar