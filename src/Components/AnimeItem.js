import React, { Component } from 'react';

class AnimeItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete(){
    const { onDelete, _id } = this.props;

    onDelete(_id);
  }

  onEdit(){
    this.setState({ isEdit: true});
  }

  onEditSubmit(event){
    event.preventDefault();

    this.props.onEditSubmit(this.nombreInput.value, this.generoInput.value, this.temporadasInput.value, this.props._id);

    this.setState({isEdit:false});
  }

  render() {
      const {nombre, genero, temporadas} = this.props;
   
      return (
        <div>
          {
            this.state.isEdit
            ? (
              <form onSubmit={this.onEditSubmit}>
                <input placeholder = "Nombre" ref={nombreInput => this.nombreInput = nombreInput} defaultValue={nombre}/>
                <input placeholder = "Genero" ref={generoInput => this.generoInput = generoInput} defaultValue={genero}/>
                <input placeholder = "Temporadas" ref={temporadasInput => this.temporadasInput = temporadasInput} defaultValue={temporadas}/>
                <button>Guardar</button>
              </form>
            ):
            (
              <div>
                <span> {nombre}</span> 
                {' | '} 
                <span>{genero}</span>
                {' | '}
                <span> {temporadas}</span> 
                {' | '}
                <button onClick={this.onEdit}>Editar</button>
                {' | '}
                <button onClick={this.onDelete}>Eliminar</button>
              </div>
            )
          }
      </div>
    );
  }
}

export default AnimeItem;