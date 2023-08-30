import {useNavigate} from "react-router-dom";
import Arrow from "../assets/Footer/RightArrow.svg";
import React from "react";
import '../styles/components/ArrowNavigationMenu.css';

const ArrowNavigationMenu = ({info, columnName, menuState, setMenuState}) => {
    const navigate = useNavigate();
    const goToLocation = (location) => {
        if (location === "") {return;}
        navigate(location);
        window.scrollTo(0,0);
    }
    const toggleMenu = ([menu, setMenu]) => {
        setMenu(!menu);
    }

    return (
        <div className='MenuContainer'>
            <div className='FooterColumnTitle' onClick={() => toggleMenu([menuState, setMenuState])}>
                {columnName}
                <img src={Arrow} alt="arrow" className={menuState ? "FooterArrowActive" : "FooterArrowInactive"}/>
            </div>
            <div className={columnName} id={menuState ? "ShowFooterItemContainer" : "HideFooterItemContainer"}>
                {info.map((item, index) => (
                    <div className='FooterItem' key={index} onClick={() => goToLocation(item.destination)}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default ArrowNavigationMenu;
