import React from 'react';
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
					<NavLink to={"/"}>
						<img src={logo} className='logo' alt="logo" />
					</NavLink>
					<NavList>
						<NavLink to={"/"}> <NavItem>Home</NavItem></NavLink>
						<NavLink to={"/about"}> <NavItem>About</NavItem></NavLink>
						<NavLink to={"/post"}> <NavItem>Post</NavItem></NavLink>
						<NavLink to={"/"}> <NavItem>Item</NavItem></NavLink>
						<NavLink to={"/"}> <NavItem>Item</NavItem></NavLink>
					</NavList >
				</div>
			</div>
		</header>
	)
}

export default Header;