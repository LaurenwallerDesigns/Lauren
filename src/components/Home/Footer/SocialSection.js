import React from 'react';
import FacebookIcon from '../../../images/icons/facebookicon.png';
import MessageIcon from '../../../images/icons/messangericon.png';
import InstagramIcon from '../../../images/icons/instagramicon.png';
import PinterestIcon from '../../../images/icons/pinteresticon.png';
import TwitterIcon from '../../../images/icons/twittericon.png';


function SocialSection(props) {
	return (
		<section>
				<ul className="social-logo">
					<li>
						<a href="www.instagram.com/laurenmichelew">
						<img src={InstagramIcon} className="icon" />
						</a>
					</li>
					<li>
						<a href="mailto:waller.lauren.lw@gmail.com">
						<img src={MessageIcon} className="icon" />
						</a>
					</li>
					<li>
						<a href="www.facebook.com">
						<img src={FacebookIcon} className="icon" />
						</a>
					</li>
					<li>
						<a href="www.twitter.com">
						<img src={TwitterIcon} className="icon" />
						</a>
					</li>
					<li>
						<a href="www.pinterest.com">
						<img src={PinterestIcon} className="icon" />
						</a>
					</li>
				</ul>
			</section>
	);
}

export default SocialSection;