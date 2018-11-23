import React, { Component } from 'react';
import './App.css';
import AnimeItem from './Components/AnimeItem';
import AddAnime from './Components/AddAnime';
import axios from 'axios';

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
  }

  onDelete(id){
    axios.delete('http://localhost:4000/animes/'+id)
    .then(console.log('Deleted'))
.catch(err => console.log(err))

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
