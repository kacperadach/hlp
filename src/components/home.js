import React from 'react';
import '../css/home.css';
import { Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './header';

const images = ['first-image', 'second-image', 'third-image'];

const imageRotationTime = 8000;

const Home = React.createClass({

	getInitialState() {
		return {
			currentImage: 0
		};
	},

	changeImage() {
		if (this.state.currentImage === images.length-1) {
			this.setState({currentImage: 0});
		} else {
			this.setState({currentImage: this.state.currentImage+1});
		}
		if (this.props.location.pathname === "/") {
			setTimeout(this.changeImage, imageRotationTime);
		}
	},

	componentWillMount() {
		setTimeout(this.changeImage, imageRotationTime);
	},

	render() {

		const currentImage = this.state.currentImage;
		const cn = `main-home-image ${images[currentImage]}`;
		return (
			<div className="main-home">
				<div className={cn}></div>
				<div className="main-home-container">
					<Header />
					<div className="main-body-container">
						<div className="main-body">
							<h2>We deliver the Highest Quality Professional Real Estate Photography</h2>
						</div>
						<div className="main-body-button-div">
							<button>
								<Link to="/gallery">
									Checkout Our Portfolio <Glyphicon glyph="home"/>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Home;