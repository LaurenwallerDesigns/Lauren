import React from 'react';

const Featured = (props) => {
	return (
		<div className="featured-blog clipped">
			<div className="featured-title">
				<h2 className="blog-title">
					My Featured Blog
				</h2>
			</div>
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