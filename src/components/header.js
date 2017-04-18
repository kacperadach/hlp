import React from 'react';
import camera from '../images/camera.png';
import logo from '../images/homelistingphotography.PNG';


const Header = React.createClass({

	render() {
		return (
			<div className="App-header">
         <img src={camera} className="App-logo" alt="logo" />
         <img src={logo} className="hlp-logo" alt="hlp-logo"/>
       </div>
		);
	}
});

export default Header;