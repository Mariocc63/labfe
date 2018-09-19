import React from 'react';

import {animes} from './animes.json';
console.log(animes)
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      animes
    }
  }

  render() {
   const animes = this.state.animes.map((anime, i) => {
      return (
        <div className="col-md-4">
          <div className = "card mt-4">
            <div className = "card-header">
              <h3>
                {anime.title_anime}
              </h3>
              <span className="badge-pill badge-danger ml-2">
              {anime.genero}
              </span>
            </div>
            <div className = "card-body">
              <p>
                {anime.description}
              </p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className = "App">
        <nav className = "navbar navbar-dark bg-dark">
          <a href = "" className = "text-white">
            tasks
          </a>
        </nav>
        <div className="container">
        <div className="row mt-4">
        {animes}
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;