import React from 'react';
import Lightroom from 'react-images';
import FrontHouse from '../images/1_Front.jpg';
import LivingRoom from '../images/4_Living_Room.jpg';
import DiningRoom from '../images/8_Dining_Room.jpg';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../css/gallery.css';

import Header from './header';

const link = 'http://www.homelistingphotography.com/wp-content/uploads/2012/07/2-front.jpg';

const imageArray = [FrontHouse, LivingRoom, DiningRoom];

const createItems = (items) => {
	return items.map((i) => {
		return {
			original: i,
			thumbnail: i
		}
	});
};

const imageRotationInterval = 5000;

const Gallery = React.createClass({

	getInitialState() {
		return {
			lightroomOpen: false,
		};
	},


	openLightRoom() {
		this.setState({lightroomOpen: true});
	},

	render() {
		return (
			<div className="main-home-container">
				<Header />
				<div className="image-gallery-div">
					<div className="image-gallery-header">
						<p>Pictures taken and developed by Home Listing Photography</p>
					</div>
					<ImageGallery items={createItems(imageArray)}/>
				</div>
			</div>
		);
	}
});

export default Gallery;