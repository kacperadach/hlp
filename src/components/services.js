import React from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/services.css';
import FloorPlanImage from '../images/branded_floor_plan.jpg'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const Services = React.createClass({
	render() {
		return (
			<div className="main-home-container">
				<Header />
				<div className="services-header">
					<p>Our Services Include...</p>
				</div>
				<div className="main-services-div">
					<div className="top-row">
						<Link to="/services/photography">
							<div className="service-background">
								<p>Photography</p>
								<div className="service photography"></div>
							</div>
						</Link>
						<Link to="/services/videos">
							<div className="service-background">
								<p>Videos</p>
								<div className="service videos"></div>
							</div>
						</Link>
					</div>
					<div className="bottom-row">
						<Link to="/services/floor-plan">
							<div className="service-background">
								<p>Floor Plans</p>
								<div className="service floor-plan"></div>
							</div>
						</Link>
						<Link to="/services/websites">
							<div className="service-background">
								<p>Property Websites</p>
								<div className="service websites"></div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
});

export default Services;