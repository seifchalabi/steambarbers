import React from "react";
import {Link} from "react-router-dom"
import logo from "../images/logo.png";
export function Navbar(){
    return(
        <nav className='nav'>
            <Link to = "/"><img className="nav-img" src = {logo} alt = "Logo" /></Link>
            <ul>
                <li>
                    <Link className = "anchor-link no-text-effect" to = "/services">Services</Link>
                </li>
                <li>
                    <Link className = "anchor-link no-text-effect" to = "/about">About</Link>
                </li>
                <li>
                    <Link className = "anchor-link no-text-effect" to = "/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}