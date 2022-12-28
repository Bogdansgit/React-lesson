import React from "react";
import "./style.scss";

const NavItem = (props) => {
    return (
        <li className="navItem">
            <a href={props.link}>{props.children}</a>
        </li>
    );
}

export default NavItem;