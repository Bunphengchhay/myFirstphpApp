import { Link as ScrollLink} from "react-scroll";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navigation({positionScroll}) {
    const [toggle, setToggle] = useState(false)

    function resetSideBar() {
        setToggle(!toggle); // Toggle the toggle state
    }

    function resetNavigationBar(){
        const loc = window.location.pathname;
        if (loc === "/membership"){
            window.location.pathname= '/';
        }
    }
    return ( 
        <div className="navigation">
            <div className="navbar">
            
                <ScrollLink to= "home"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={resetNavigationBar}
                >
                    Home
     
                </ScrollLink>

                <ScrollLink to= "about"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={resetNavigationBar}
                >
                    About
                </ScrollLink>
                <ScrollLink to= "product"
                smooth={true}
                duration={500}
                offset={-100}
                >
                    Products
                </ScrollLink>
                <ScrollLink to= "news"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={resetNavigationBar}
                >
                    News
                </ScrollLink>
         
                <ScrollLink
                to= "contact"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={resetNavigationBar}
                >
                    Contacts
                </ScrollLink>
                <Link to="/membership" style={{textDecoration: 'none', color: 'black'}}> Membership </Link>
                <Link to="/findusers" style={{textDecoration: 'none', color: 'black'}}> Users </Link>
           
            </div>
            <div className="sideBar" onClick={resetSideBar}>
                <div className="burgerBar" onClick={resetSideBar}>
                    <div style={{width: '20px', height: '2px', backgroundColor: 'black'}}></div>
                    <div style={{width: '20px', height: '2px', backgroundColor: 'black'}}></div>
                    <div style={{width: '20px', height: '2px', backgroundColor: 'black'}}></div>
                </div>
            </div>
            {toggle && <div className="sideBarDropDown">
            <div className="dropDownItems" onClick={resetSideBar}>
                <ScrollLink to= "home"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => { resetNavigationBar(); resetSideBar(); }}
                >
                    Home
                </ScrollLink>
                <ScrollLink to= "about"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => { resetNavigationBar(); resetSideBar(); }}
                >
                    About
                </ScrollLink>
                <ScrollLink to= "product"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => { resetNavigationBar(); resetSideBar(); }}
                >
                    Products
                </ScrollLink>
                <ScrollLink to= "news"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => { resetNavigationBar(); resetSideBar(); }}
                >
                    News
                </ScrollLink>
                <Link to="/membership" style={{textDecoration: 'none', color: 'black'}}> Membership </Link>
                <Link to="/findusers" style={{textDecoration: 'none', color: 'black'}}> Users </Link>
                <ScrollLink to= "contact"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => { resetNavigationBar(); resetSideBar(); }}
                >
                    Contacts
                </ScrollLink>
            </div>
            </div>}

        </div>
     );
}

export default Navigation;