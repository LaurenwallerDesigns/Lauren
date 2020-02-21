import React from 'react';
import Featured from './MiddleSection/Featured';
import Aside from './MiddleSection/Aside';
import LogoAds from './LogoAds/LogoAds';
import Footer from './Footer/Footer';

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