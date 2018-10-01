import React, { Component } from 'react';

class AddAnime extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onAdd(this.nombreInput.value, this.generoInput.value, this.temporadasInput.value);

    this.nombreInput.value = '';
    this.generoInput.value = '';
    this.temporadasInput.value = '';
  }

  render() {
      return (
        <form onSubmit={this.onSubmit}>
            <h3>Agregar Anime</h3>
            <input placeholder = "Nombre" ref={nombreInput => this.nombreInput = nombreInput}/>
            <input placeholder = "Genero" ref={generoInput => this.generoInput = generoInput}/>
            <input placeholder = "Temporadas" ref={temporadasInput => this.temporadasInput = temporadasInput}/>
            <button>Agregar</button>
        </form>
    );
  }
}

export default AddAnime;
