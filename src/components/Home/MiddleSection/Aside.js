import React from 'react';

class Aside extends React.Component {
	constructor(props) {
		super(props);
		this.state ={isAsideOpen: false, width: 0};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState(state => ({
			isAsideOpen: !state.isAsideOpen
		}));
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth});
	}
	
	render () {
		return (
			<aside className="blog-list-aside" onClick={this.handleClick}>
				<h2 className="aside-title">
					Recent Blogs
				</h2>
				<ul style={{display:this.state.isAsideOpen || this.state.width >= 790 ? 'flex' : 'none'}}>
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