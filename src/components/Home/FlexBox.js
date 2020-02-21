import React from 'react';
import Featured from './MiddleSection/Featured';
import Aside from './MiddleSection/Aside';
import LogoAds from './LogoAds/LogoAds';

function FlexBox(props) {
	return (
		<div className="flex-box">
			<Featured />
			<Aside />
			<LogoAds />
		</div>

	);
}

export default FlexBox;