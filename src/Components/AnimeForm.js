import React, {Component} from 'react';

class AnimeForm extends Component{
    constructor(){
        super();
        this.state = {
            title_anime: '',
            genero: '',
            description: ''
        };
    }

    handleInput (){
        
    }

    render () {
        return (
            <div className="card">
                <form className="card-body">
                <div className="form-group">
                    <input
                        type="text"
                        name="title_anime"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Titulo"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="genero"
                        className="form-control"
                        placeholder="Genero"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="description"
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