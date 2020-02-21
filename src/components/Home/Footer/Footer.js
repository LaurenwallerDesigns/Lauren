import React from 'react';
import SocialSection from './SocialSection';
import LogoSection from './MiddleSection';
import SubNav from './SubFooterNav';


function Footer(props) {
	return (
		<footer className="sticky-footer">
			<SocialSection />
			<LogoSection />
			<SubNav />
		</footer>
	);
}

export default Footer;