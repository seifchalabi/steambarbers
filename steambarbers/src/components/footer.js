import { Link } from "react-router-dom";
import React from "react";
export function Footer(){
    return(
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Steam <span>barbers</span></h3>
                <p className="footer-links">
                    <Link style={{display:"inline-block",lineHeight:"1.8",textDecoration:"none",color:"inherit"}}to="/">Home</Link>|
                    <Link style={{display:"inline-block",lineHeight:"1.8",textDecoration:"none",color:"inherit"}}to="/about">About</Link>|
                    <Link style={{display:"inline-block",lineHeight:"1.8",textDecoration:"none",color:"inherit"}}to="/contact">Contact</Link>|
                    <Link style={{display:"inline-block",lineHeight:"1.8",textDecoration:"none",color:"inherit"}}to="/service">Services</Link>
                </p>
                <p className="footer-company-name">Copyright © 2022 <strong>Steambarbers</strong> All rights reserved</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>istanbul</span>Turkey</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+12 3456789</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><b>steambarbers@gmail.com</b></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    <strong>Steambarbers </strong> 
                    is a barber shop located and founded in istanbul turkey 
                    where we offer amazing cuts for cheap prices
                </p>
            </div>
        </footer>
    )
}