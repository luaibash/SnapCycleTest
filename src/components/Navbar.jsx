import React from 'react';
import BlackLogo from "../assets/branding/BlackLogo.png";
import '../styles/Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();

    const goToLocation = (location) => {
        navigate(location);
    }

    return (
        <div className="Navbar">
            <div className="NavbarLogo">
                <img src={BlackLogo} alt="SnapCycle Logo" className="NavbarLogoImage" onClick={() => goToLocation("/")}/>
                SnapCycle
            </div>
            <div className="NavbarPagesContainer">
                <div className="NavbarPages" onClick={() => goToLocation("/")}>Home</div>
                <div className="NavbarPages" onClick={() => goToLocation("/team")}>Team</div>
            </div>
            <div className="NavbarAdditionalContainer">
                <div className="NavbarAdditional" onClick={() => goToLocation("/demo")}>Demo</div>
            </div>
        </div>
    );
}

export default Navbar;