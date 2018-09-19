import React from 'react';

import {animes} from './animes.json';
console.log(animes)
class App extends React.Component {
  render() {
    return (
      <div className = "App">
        <nav className = "navbar navbar-dark bg-dark">
          <a href = "" className = "text-white">
            tasks
          </a>
        </nav>
      </div>
    );
  }
}

export default App;