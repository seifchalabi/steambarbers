import React, { useState } from "react";
import {Link, NavLink} from "react-router-dom"
import logo from "../images/logo-transparent-bg.png";
export function Navbar(){

    const [color, setColor] = useState(false)
    const changeColor = () =>
    {
        if(window.scrollY >= 110)
        {
            setColor(true)
        }
        else
        {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return(
        <nav className={color ? 'nav' : 'nav nav-bg'}>
            <Link to = "/" reloadDocument><img className="nav-img" src = {logo} alt = "Logo" /></Link>
            <ul>
                <li>
                    <NavLink className = "anchor-link no-text-effect" to = "/services" reloadDocument>Services</NavLink>
                </li>
                <li>
                    <NavLink className = "anchor-link no-text-effect" to = "/about" reloadDocument>About</NavLink>
                </li>
                <li>
                    <NavLink className = "anchor-link no-text-effect" to = "/contact" reloadDocument>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}