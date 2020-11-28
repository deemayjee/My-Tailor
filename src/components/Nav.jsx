import React from 'react';
// import logo from 'https://www.pngkit.com/png/full/825-8255520_fiat-500-gucci-logo-decal-gucci.png';


const Nav = () => {
    return (
        <div>
           <div className="nav-container">
            <a className="logo" href="/"><img src='https://www.pngkit.com/png/full/825-8255520_fiat-500-gucci-logo-decal-gucci.png' width="100px" alt="logo"/></a>
            <div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
            <a className="cta" href="/">Login / Register</a>
        </div>
        </div>
    )
}








export default Nav
