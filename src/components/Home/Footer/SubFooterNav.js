import React from 'react';
import { NavLink } from 'react-router-dom';

function SubNav(props) {
	return (
		<section className="sub-nav">
			<ul className="sub-nav-ul">
					<NavLink to="/" className="sub-li"> Home </NavLink>
					<NavLink to="../../PeaksAndPixelsDesign/PPDHome" className="sub-li"> Peaks &amp; Pixels Designs </NavLink>
					<NavLink to="../../MEMCrafts/MEMCraftsHome" className="sub-li"> MEM crafts </NavLink>
					<NavLink to="../../About/About" className="sub-li"> About </NavLink>
					<NavLink to="../../Contact/Contact" className="sub-li"> Contact </NavLink>
					<NavLink to="../../Admin/Admin" className="sub-li"> Log In </NavLink>
			</ul>
		</section>
	);
}

export default SubNav;

