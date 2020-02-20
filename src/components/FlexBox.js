import React from 'react';
import Featured from './Featured';
import Aside from './Aside';
import LogoAds from './LogoAds';
import Footer from './Footer';

function FlexBox(props) {
	return (
		<div className="flex-box">
			<Featured />
			<Aside />
			<LogoAds />
			<Footer />
		</div>

	);
}

export default FlexBox;