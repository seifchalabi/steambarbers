import React from "react";
import {Link} from "react-router-dom"
import logo from "../images/logo.png";
export function Navbar(){
    return(
        <nav className='nav'>
            <Link to = "/"><img className="nav-img" src = {logo} alt = "Logo" /></Link>
            <ul>
            <li>
                <Link to = "/services">Services</Link>
                <Link to = "/about">About</Link>
                <Link to = "/contact">Contact</Link>
            </li>
            </ul>
        </nav>
    )
}