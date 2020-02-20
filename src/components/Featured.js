import React from 'react';
import ClipPath from './ClipPath';

const Featured = (props) => {
	return (
		<div className="featured-blog clipped">
			<div className="featured-title">
				<h2 className="blog-title">
					My Featured Blog
				</h2>
			</div>
			<svg height="0" width="0">
				<defs>
					<ClipPath />
				</defs>
			</svg>
				<div className="aside-date">
					<p className="date-text">January 01, 2020</p>
				</div>
			<div className="featured-paragraph">
				<p>
					lorem upside, lorem upside, lorem upside, lorem upside, lorem upside
					,lorem upside, lorem upside, lorem upside, lorem upside, lorem upside
					lorem upside lorem upside lorem upside lorem upside lorem upside 
					lorem upside lorem upside lorem upside lorem upside lorem upside
				</p>
				<p> More like this </p>
			</div>
		</div>

	);
}



export default Featured;