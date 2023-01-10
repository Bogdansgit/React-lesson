import { NavLink } from 'react-router-dom';

import "./style.scss";

function NavItem({ to, children }) {
    
    return (
        <li className="navItem">
            <NavLink className='navLink' to={to}>{children}</NavLink>
        </li>
    );
}

export default NavItem;