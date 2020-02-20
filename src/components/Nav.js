import React from 'react'; 

class Nav extends React.Component{
	constructor(props) {
		super(props);
		this.state ={isNavOpen: false};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			isNavOpen: !state.isNavOpen
		}));
	}

	render() {
		return (

			<nav className="top-nav"> 
				<span onClick={this.handleClick} style={{margin: this.state.isNavOpen ? '3px' : '0 auto' }} >
					{this.state.isNavOpen ? 'x' : '+'}
				</span>
				<ul className="top-nav-ul" 
				style={{display: this.state.isNavOpen ? 'flex' : 'none' }}>
					<li> Home </li>
					<li> Peaks &amp; Pixels Designs </li>
					<li> MEM crafts </li>
					<li> About </li>
					<li> Contact </li>
				</ul>
			</nav>
		);
	}
}

export default Nav;