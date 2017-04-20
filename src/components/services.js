import React from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/services.css';
import FloorPlanImage from '../images/branded_floor_plan.jpg'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Photography from '../components/photography';

const Services = React.createClass({

	getInitialState() {
		return {
			currentService: null
		}
	},

	componentWillReceiveProps(nextProps) {
		if (nextProps.location.pathname === "/services") {
			this.setState({currentService: null});
		}
	},	

	changeService(service) {
		if (this.state.currentService === null) {
			this.setState({currentService: service});
		}
	},

	componentWillMount() {
		if (this.props.location.pathname === "/services/photography") {
			this.setState({currentService: 'photography'});
		} else if (this.props.location.pathname === "/services/videos") {
			this.setState({currentService: 'videos'});
		} else if (this.props.location.pathname === "/services/floor-plan") {
			this.setState({currentService: 'floorPlan'});
		} else if (this.props.location.pathname === "/services/websites") {
			this.setState({currentService: 'websites'});
		}
	},

	render() {

		const {
			match
		} = this.props;

		const {
			currentService
		} = this.state;

		let classNameObj = {}


		if (currentService === 'photography') {
			classNameObj = {
				photography: 'spotlight',
				videos: 'hideService',
				floorPlan: 'hideService',
				websites: 'hideService',
				firstCol: '',
				secondCol: 'hideCol'
			}
		} else if (currentService === 'videos'){
			classNameObj = {
				photography: 'hideService',
				videos: 'spotlight',
				floorPlan: 'hideService',
				websites: 'hideService',
				firstCol: '',
				secondCol: 'hideCol'
			}
		} else if (currentService === 'floorPlan'){
			classNameObj = {
				photography: 'hideService',
				videos: 'hideService',
				floorPlan: 'spotlight',
				websites: 'hideService',
				firstCol: 'hideCol',
				secondCol: ''
			}
		} else if (currentService === 'websites'){
			classNameObj = {
				photography: 'hideService',
				videos: 'hideService',
				floorPlan: 'hideService',
				websites: 'spotlight',
				firstCol: 'hideCol',
				secondCol: ''
			}
		} else {
			classNameObj = {
				photography: '',
				videos: '',
				floorPlan: '',
				websites: '',
				firstCol: '',
				secondCol: ''
			}
		}

		return (
			<div className="main-home-container">
				<Header />
				<div className="services-header">
					<p>Our Services Include...</p>
				</div>
				<div className="main-services-div">
					<div className={`first-column ${classNameObj['firstCol']}`}>
						<Link to={`${match.url}/photography`} onClick={() => this.changeService('photography')}>
							<div className={`service-background ${classNameObj['photography']}`}>
								<p>Photography</p>
								<Route path={`${match.url}/photography`} component={Photography}/>
								<div className="service photography"></div>
							</div>
						</Link>
						<Link to={`${match.url}/photography`} onClick={() => this.changeService('videos')}>
							<div className={`service-background service-bottom ${classNameObj['videos']}`}>
								<p>Videos</p>
								<div className="service videos"></div>
							</div>
						</Link>
					</div>
					<div className={`second-column ${classNameObj['secondCol']}`}>
						<Link to={`${match.url}/floor-plan`} onClick={() => this.changeService('floorPlan')}>
							<div className={`service-background ${classNameObj['floorPlan']}`}>
								<p>Floor Plans</p>
								<div className="service floor-plan"></div>
							</div>
						</Link>
						<Link to={`${match.url}/websites`} onClick={() => this.changeService('websites')}>
							<div className={`service-background service-bottom ${classNameObj['websites']}`}>
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