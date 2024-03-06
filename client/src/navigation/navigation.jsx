import { Link } from "react-scroll";
import Home from "../view/home";
import About from "../view/about";
import React from "react";
function Navigation({positionScroll}) {
    return ( 
        <div className="navigation">
            <div className="navbar">
                <Link to= "home"
                smooth={true}
                duration={500}
                offset={-100}
                >
                    Home
                </Link>
                <Link to= "about"
                smooth={true}
                duration={500}
                offset={-100}
                >
                    About
                </Link>
                <Link to= "product"
                smooth={true}
                duration={500}
                offset={-100}
                >
                    Products
                </Link>
                <Link to= "news"
                smooth={true}
                duration={500}
                offset={-100}
                >
                    News
                </Link>
                <Link to= "contact"
                smooth={true}
                duration={500}
                offset={-100}
                >
                    Contacts
                </Link>
            </div>

        </div>
     );
}

export default Navigation;