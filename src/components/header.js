import React from 'react';
import camera from '../images/camera.png';
import logo from '../images/homelistingphotography.PNG';


const Header = React.createClass({

	render() {
		return (
			<div className="App-header">
				<div className="app-header-div">
					<div className="camera-logo-div">
	         <img src={camera} className="camera-logo" alt="logo" />
	        </div>
	        <div className="hlp-logo-div">
	         <img src={logo} className="hlp-logo" alt="hlp-logo"/>
	         test
	        </div>
	      </div>
       </div>
		);
	}
});

export default Header;