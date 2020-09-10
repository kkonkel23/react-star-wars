import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import StarshipList from '../StarshipList/StarshipList'
import StarshipDetails from '../StarshipDetails/StarshipDetails'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <h1>STAR WARS STAR SHIPS</h1>
        <Route
          exact path='/'
          render = {() =>
            <StarshipList />}
        />
        <Route 
          exact path= '/starship/'
          render={( {location} ) => 
            <StarshipDetails 
              location={location}
            />
          }
        />
      </>
    );
  }
}
 


export default App;
