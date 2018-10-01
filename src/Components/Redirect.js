import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Redirect = () => (
  <Router>
    <div>
      <ul>
        
         <li>
          <Link to="/prueba">Prueba</Link>
        </li>
     
      </ul>

      <hr />

      
      <Route path="/prueba" component={prueba}/>

    </div>
  </Router>
);

const prueba = () => (
    <div>
        {/* <Prueba></Prueba> */}
    </div>
);

export default Redirect