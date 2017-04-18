import React, { Component } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import ImageGallery from './components/imageGallery';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
