import React from "react";
import Prueba from './Components/Prueba';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Redirect = () => (
  <Router>
    <div>
      <ul>
        
        <Prueba></Prueba>
     
      </ul>

      <hr />

      
      <Route path="/prueba"/>

    </div>
  </Router>
);

export default Redirect