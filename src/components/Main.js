import React, { Component } from 'react';
import './../App.css';

import Nav from './Nav';
import Home from './Home';



class Main extends Component {
  render() {
    return (

      <div>
      

            <div className="container">
            
              <div>
                <Nav />
              </div>
            
              <div className="container" id="home">
                <Home />
              </div>

            </div>

        </div>

    );
  }
}

export default Main;
