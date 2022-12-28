import React from "react";

import NavItem from "../NavItem";
import NavList from "../NavList";
import "../Header/style.scss";


function Footer () {

	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<div className='logo'><h2>LOGO</h2></div>
					<NavList>
						<NavItem url='#'>Home</NavItem>
						<NavItem url='#'>Item</NavItem>
						<NavItem url='#'>Item</NavItem>
						<NavItem url='#'>Item</NavItem>
						<NavItem url='#'>Item</NavItem>
					</NavList >
				</div>
			</div>
		</header>
	)
}

export default Footer;