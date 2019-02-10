import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


import Main from './components/Main';
import Error from './components/Error';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (

      <div>
      
          <BrowserRouter>

            <Switch>

              <Route path="/" component={Main} exact />

              <Route path="/portfolio" component={Portfolio} />

              <Route path="/contact" component={Contact} />

              <Route component={Error} />
            </Switch>
          
          </BrowserRouter>


        </div>

    );
  }
}

export default App;
