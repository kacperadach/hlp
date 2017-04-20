import React, { Component } from 'react';
import './App.css';
import Gallery from './components/imageGallery';
import Home from './components/home';
import Services from './components/services';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Photography from './components/photography';

class App extends Component {

  render() {
    return (
	  	<Router>
	  		<div>
		  		<Route exact path="/" component={Home}/>
		  		<Route path="/gallery" component={Gallery}/>
		  		<Route path="/services" component={Services}/>
		  	</div>
	  	</Router>
    );
  }
}

export default App;