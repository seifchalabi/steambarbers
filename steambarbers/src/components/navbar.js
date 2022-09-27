import React from "react";
import {Link, NavLink} from "react-router-dom"
import logo from "../images/logo.png";
export function Navbar(){
    return(
        <nav className='nav'>
            <Link to = "/"><img className="nav-img" src = {logo} alt = "Logo" /></Link>
            <ul>
                <li>
                    <NavLink className = "anchor-link no-text-effect" to = "/services">Services</NavLink>
                </li>
                <li>
                    <NavLink className = "anchor-link no-text-effect" to = "/about">About</NavLink>
                </li>
                <li>
                    <NavLink className = "anchor-link no-text-effect" to = "/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}