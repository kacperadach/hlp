import React from 'react';
import '../css/home.css';
import { Glyphicon } from 'react-bootstrap';

const Home = React.createClass({

	render() {
		return (
			<div className="main-home">
				<div className="main-home-image">
					<div className="main-home-container">
						<div className="main-top-container">
							<div className="home-logo-div">
								<h1><strong>H</strong>ome <strong>L</strong>isting <strong>P</strong>hotography</h1>
							</div>
							<div className="home-menu-div">
								<button>Home</button>
								<button>Gallery</button>
								<button>Contact</button>
							</div>
						</div>
						<div className="main-body-container">
							<div className="main-body">
								<h2>We deliver the Highest Quality Professional Real Estate Photography</h2>
							</div>
							<div className="main-body-button-div">
								<button>Checkout Our Portfolio <Glyphicon glyph="home"/></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Home;