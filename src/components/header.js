import React from 'react';
import { Link } from 'react-router-dom';

const Header = React.createClass({
	render() {
		return (
			<div className="main-top-container">
				<div className="home-logo-div">
					<h1>Home Listing Photography</h1>
				</div>
				<div className="home-menu-div">
					<button><Link to="/">Home</Link></button>
					<button><Link to="/gallery">Gallery</Link></button>
					<button><Link to="/contact">Contact</Link></button>
				</div>	
			</div>
		);
	}
});

export default Header;