import React, { Component } from 'react';
import './App.css';
import AnimeItem from './Components/AnimeItem';
import AddAnime from './Components/AddAnime';
import axios from 'axios';

/* const animes = [
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
] */

//localStorage.setItem('animes', JSON.stringify(animes));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animes: []
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentDidMount(){
    this.getAnimes()
    //console.log(this.state.animes)
  }

  componentDidUpdate(){
    this.getAnimes()
    
  }


  getAnimes(){
    axios.get('http://localhost:4000/animes')
    .then(response => {
      this.setState({ animes: response.data });
    })
    .catch(function (error) {
      console.log(error);
})
  }

  onAdd(name, gender, temp){
    const obj = {
      nombre: name,
      genero: gender,
      temporadas: temp
    };
    axios.post('http://localhost:4000/animes/', obj)
        .then(res => console.log(res.data));

    //const animes = this.state.animes;

    // animes.push({
    //   name,
    //   gender,
    //   temp
    // });

    // this.setState({animes});
  }

  onDelete(nombre){
    const animes = this.state.animes;

    const fillteredAnimes = animes.filter(anime => {
      return anime.nombre !== nombre;
    });

    this.setState({animes: fillteredAnimes});
  } 

  onEditSubmit(name, gender, temp, id){
    const obj = {
      nombre: name,
      genero: gender,
      temporadas: temp
    };
    axios.put('http://localhost:4000/animes/'+id, obj)
.then(res => console.log(res.data));
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
