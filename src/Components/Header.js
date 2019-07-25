import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => {
	return (
		<header>
			<h1>Expensify</h1>
			<NavLink exact to={"/"} activeClassName={"is-active"}>Home</NavLink>
			<NavLink to={"/create"} activeClassName={"is-active"}>Create</NavLink>
			<NavLink to={"/help"} activeClassName={"is-active"}>Help</NavLink>
		</header>
	)
};

export default Header;