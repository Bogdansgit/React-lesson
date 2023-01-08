import React from "react";

import "./style.scss";
import NavItem from "../NavItem";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <NavItem to='/dashboard'>Dashboard</NavItem>
            <NavItem to='/dashboard/tasks'>Tasks</NavItem>
            <NavItem to='/dashboard/posts'>Posts</NavItem>
        </div>
    );
}

export default Sidebar;