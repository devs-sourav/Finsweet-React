import React from 'react'
import ListItem from '../layouts/ListItem'
import "./navbar.css"

const Navbar = () => {
  return (
    
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrap">
                <div className="logo">
                    <a href="#"><img src="images/Logo.png" alt="Logo.png"/></a>
                </div>
                <div className="menu_wrap">
                    <ul className="menu_list">
                        <ListItem title="Home"/>
                        <ListItem title="About us"/>
                        <ListItem title="Features"/>
                        <ListItem title="Pricing"/>
                        <ListItem title="FAQ"/>
                        <ListItem title="Blog"/>
                    </ul>
                    <div className="btn">
                        <a href="#">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar