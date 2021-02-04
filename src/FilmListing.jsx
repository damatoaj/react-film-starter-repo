import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    render() {
         const allFilms = this.props.films.map((film, index)=> {
            return ( <FilmRow film={film} key={`filmRow-${index}`} />)
         })
        return(
            <div className="film-list">
                <h1 className="section-title">Films</h1>
                {allFilms}
            </div>
        )
    }
}

export default FilmListing;