import React from 'react';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, Row, Col, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import '../css/services.css';

const Services = React.createClass({
	render() {
		return (
			<div className="main-home-container">
				<Header />
				<div className="main-services-div">
					<Tab.Container id="left-tabs" defaultActiveKey="first">
				    <Row className="clearfix">
				      <Col sm={4}>
				        <Nav bsStyle="pills" stacked>
				          <NavItem eventKey="first">
				            <Glyphicon glyph="camera"/><p>Real Estate Photography</p>
				          </NavItem>
				          <NavItem eventKey="second">
				            <Glyphicon glyph="home"/><p>Property Floor Plans</p>
				          </NavItem>
				          <NavItem eventKey="third">
				            <Glyphicon glyph="facetime-video"/><p>Real Estate Videos</p>
				          </NavItem>
				          <NavItem eventKey="fourth">
				            <Glyphicon glyph="apple"/><p>Individual Property Websites</p>
				          </NavItem>
				        </Nav>
				      </Col>
				      <Col sm={3}>
				        <Tab.Content animation>
				          <Tab.Pane eventKey="first">
				            Tab 1 content
				          </Tab.Pane>
				          <Tab.Pane eventKey="second">
				            Tab 2 content
				          </Tab.Pane>
				          <Tab.Pane eventKey="third">
				            Tab 3 content
				          </Tab.Pane>
				          <Tab.Pane eventKey="fourth">
				            Tab 4 content
				          </Tab.Pane>
				        </Tab.Content>
				      </Col>
				    </Row>
				  </Tab.Container>
				 </div>
			</div>
		);
	}
});

export default Services;