import React, { Component } from 'react';
import './App.css';
import AnimeItem from './AnimeItem';
import AddAnime from './AddAnime';

const animes = [
  {
    nombre: "Naruto",
    genero: "Shounen, accion, ninjas",
    temporadas: 2
  },
  {
    nombre: "Fairy Tail",
    genero: "Shounen, magia, fantasia",
    temporadas: 3
  }
]

localStorage.setItem('animes', JSON.stringify(animes));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animes: JSON.parse(localStorage.getItem('animes'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const animes = this.getAnimes();

    this.setState({animes});
  }

  getAnimes(){
    return this.state.animes;
  }

  onAdd(nombre, genero, temporadas){
    const animes = this.getAnimes();

    animes.push({
      nombre,
      genero,
      temporadas
    });

    this.setState({animes});
  }

  onDelete(nombre){
    const animes = this.getAnimes();

    const fillteredAnimes = animes.filter(anime => {
      return anime.nombre !== nombre;
    });

    this.setState({animes: fillteredAnimes});
  } 

  onEditSubmit(nombre, genero, temporadas, nombreOriginal){
    let animes = this.getAnimes();

    animes = animes.map(anime => {
      if(anime.nombre === nombreOriginal){
        anime.nombre = nombre;
        anime.genero = genero;
        anime.temporadas = temporadas;
      }
      return anime;
    });

    this.setState({animes});
  }

  render() {
    return (
      <div className="App">
        <h1>Clasificacion Animes</h1>

        <AddAnime
          onAdd = {this.onAdd}
        />
        <hr />
        {
          this.state.animes.map(anime => {
            return (
              <AnimeItem 
                key={anime.nombre}
                {...anime}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
