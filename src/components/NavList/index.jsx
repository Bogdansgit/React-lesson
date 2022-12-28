import React from "react";
import "./style.scss";

const NavList = ({children, style}) => {

    const navStyle = style === 'vertical' ? 'vertical' : 'horizontal';

    return (
        <nav>
            <ul className={navStyle}>
                {children}
            </ul>
        </nav>
    );
}

export default NavList;