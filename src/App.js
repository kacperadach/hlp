import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Gallery from './components/imageGallery';
import Home from './components/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
	  	<Router>
	  		<div>
		  		<Route exact path="/" component={Home}/>
		  		<Route path="/gallery" component={Gallery}/>
		  	</div>
	  	</Router>
    );
  }
}

export default App;