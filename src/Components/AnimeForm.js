import React, {component} from 'react';

class AnimeForm extends component{
    constructor(){
        super();
        this.state = {
            title_anime: '',
            genero: '',
            description: ''
        };
    }

    render () {
        return (
            <div className="card">
                <form className="card-body">
                <div className="form-group">
                    <input
                        type="text"
                        name="title_anime"
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
                </form>
            </div>
        );
    }
}