import { NavLink } from 'react-router-dom';

import logo from "../../images/logo.svg";
import NavItem from "../NavItem";
import NavList from "../NavList";
import "./style.scss";

function Header () {

	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<NavLink to="/">
						<img src={logo} className='logo' alt="logo" />
					</NavLink>
					<NavList>
						<NavItem to="/">Home</NavItem>
						<NavItem to="/about">About</NavItem>
						<NavItem to={"/*"}>Item</NavItem>
						<NavItem to={"/*"}>Item</NavItem>
						<NavItem to="/contact">Contact</NavItem>
					</NavList >
				</div>
			</div>
		</header>
	)
}

export default Header;