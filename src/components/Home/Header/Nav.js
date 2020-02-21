import React from 'react'; 
import { NavLink } from 'react-router-dom';

class Nav extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			isNavOpen: false,
			width: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
				<div className="top-nav-ul" 
				style={{display: this.state.isNavOpen || this.state.width >= 790 ? 'flex' : 'none' }}>
					<NavLink to="/" className="li"> Home </NavLink>
					<NavLink to="../../PeaksAndPixelsDesign/PPDHome" className="li"> Peaks &amp; Pixels Designs </NavLink>
					<NavLink to="../../MEMCrafts/MEMCraftsHome" className="li"> MEM crafts </NavLink>
					<NavLink to="../../About/About" className="li"> About </NavLink>
					<NavLink to="../../Contact/Contact" className="li"> Contact </NavLink>
					<NavLink to="../../Admin/Admin" className="li"> Log In </NavLink>
				</div>
			</nav>
		);
	}
}

export default Nav;



