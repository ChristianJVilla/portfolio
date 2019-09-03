import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './NavBar.css'

const NavBar = () => {
    return(
    <nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
    <AnchorLink className="navbar-brand animated pulse infinite slower" href="#Top"><i className="fab fa-cuttlefish"></i><i class="fab fa-vimeo-v"></i></AnchorLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto ">
        <li className="nav-item active">
            <AnchorLink className="nav-link" href="#About">About</AnchorLink>
        </li>
        <li className="nav-item">
            <AnchorLink className="nav-link" href="#Projects">Projects</AnchorLink>
        </li>
        <li className="nav-item">
            <AnchorLink className="nav-link" href="#Contact">Contact</AnchorLink>
        </li>
        <li className="nav-item resume">
            <button className="nav-link" onClick={()=> window.open("../../../resume.pdf", "_blank")} >Resume</button>
        </li>
        </ul>
    </div>
    </nav>
    )
}

export default NavBar;