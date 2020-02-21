import React from 'react';

class Aside extends React.Component {
	constructor(props) {
		super(props);
		this.state ={isAsideOpen: false};

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(state => ({
			isAsideOpen: !state.isAsideOpen
		}));
	}
	
	render () {
		return (
			<aside className="blog-list-aside" onClick={this.handleClick}>
				<h2 className="aside-title">
					Recent Blogs
				</h2>
				<ul style={{display:this.state.isAsideOpen ? 'flex' : 'none'}}>
					<li> Blog One </li>
					<li> Blog Two </li>
					<li> Blog Three </li>
					<li> Blog Four </li>
					<li> Blog Five </li>
					<li> Blog Six </li>
					<li> Blog Seven </li>

				</ul>

			</aside>
		);
	}
}

export default Aside;