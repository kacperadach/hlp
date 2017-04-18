import React from 'react';
import Lightroom from 'react-images';
import FrontHouse from '../images/1_Front.jpg';
import LivingRoom from '../images/4_Living_Room.jpg';
import DiningRoom from '../images/8_Dining_Room.jpg';

const link = 'http://www.homelistingphotography.com/wp-content/uploads/2012/07/2-front.jpg';

const imageArray = [FrontHouse, LivingRoom, DiningRoom];

const imageRotationInterval = 5000;

const Home = React.createClass({

	getInitialState() {
		return {
			lightroomOpen: false,
			currentImage: 0,
			previousImage: imageArray.length-1
		};
	},

	changeImage() {
		if (this.state.currentImage === imageArray.length - 1) {
			this.setState({currentImage: 0, previousImage: imageArray.length-1});
		} else {
			this.setState({currentImage: this.state.currentImage+1, previousImage: this.state.currentImage});
		}
		setTimeout(this.changeImage, imageRotationInterval);
	},

	componentWillMount() {
		setTimeout(this.changeImage, imageRotationInterval);
	},

	openLightRoom() {
		this.setState({lightroomOpen: true});
	},

	render() {

		const {
			lightroomOpen,
			currentImage,
			previousImage
		} = this.state;

		return (
			<div className="main-div">
				<div className="main-images">
					{imageArray.map((i, key) => {
						let cn = "home-main-photo";
						if (key !== currentImage) {
							cn += " hidden"
						}
						return (
							<img key={key} src={i} className={cn} onClick={this.openLightRoom} />
						);
					})}
				</div>
			</div>
		);
	}
});

export default Home;