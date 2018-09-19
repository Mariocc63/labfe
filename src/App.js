import React from 'react';

import {animes} from './animes.json';
import AnimeForm from './Components/AnimeForm';
//console.log({animes})
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      animes
    };
    this.handleAddAnime = this.handleAddAnime.bind(this);
  }

  handleAddAnime(anime) {
    this.setState({
      animes: [...this.state.animes, anime]
    })
}

  render() {
   const animes = this.state.animes.map((anime, i) => {
      return (
        <div className="col-md-4" key={i}>
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
            Animes
            <span className="badge badge-pill badge-light ml-2">
              {this.state.animes.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <AnimeForm onAddAnime={this.handleAddAnime}></AnimeForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {animes}
              </div>
        </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;