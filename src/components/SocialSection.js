import React from 'react';

function SocialSection(props) {
	return (
		<section className="float-left">
				<ul className="social-logo">
					<li>
						Instagram
						<a href="www.instagram.com/laurenmichelew">
						<img src="..." />
						</a>
					</li>
					<li>
						GitHub
						<a href="www.github.com">
						<img src="..." />
						</a>
					</li>
					<li>
						Email
						<a href="mailto:waller.lauren.lw@gmail.com">
						<img src="..." />
						</a>
					</li>
					<li>
						Facebook
						<a href="www.facebook.com">
						<img src="..." />
						</a>
					</li>
					<li>
						Twitter
						<a href="www.twitter.com">
						<img src="..." />
						</a>
					</li>
				</ul>
			</section>
	);
}

export default SocialSection;