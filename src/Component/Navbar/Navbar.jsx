import React from 'react'
import "./Navbar.css"
import Logo from "./Logo.png"
import arrow from "./arrow.png"
import Sun from "./Sun.png"

function Navbar() {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
                <div class="container-fluid">
                    <img id='logo' src={Logo} alt="" />
                    <a class="navbar-brand" href="#" id='navMysite'>My Site</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Tutorial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item SunArrow">
                                <a class="nav-link" href="#">GitHub <img id='arrow' src={arrow} alt="" /></a>
                            </li>
                            <li class="nav-item SunArrow">
                                <a class="nav-link" href="#"><img id='sun' src={Sun} alt="" /></a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar