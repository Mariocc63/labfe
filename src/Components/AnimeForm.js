import React, {Component} from 'react';

class AnimeForm extends Component{
    constructor(){
        super();
        this.state = {
            title_anime: '',
            genero: '',
            description: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddAnime(this.state);
        this.setState({
          title_anime: '',
          genero: '',
          description: ''
        });
        let animes = [];
        animes.unshift(window.localStorage.setItem('animes', JSON.stringify(this.state)));
    }

    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }

    render () {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title_anime"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        className="form-control"
                        placeholder="Titulo"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="genero"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        className="form-control"
                        placeholder="Genero"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="description"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        className="form-control"
                        placeholder="Descripcion"
                    />
                </div>
            <button type="submit" className="btn btn-primary">
                Save
            </button>
            </form>
        </div>
        )
    }
}

export default AnimeForm;