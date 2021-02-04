import React, { Component } from 'react';
import FilmPoster from './FilmPoster';

class FilmRow extends Component {
    render() {
        const str = this.props.film.release_date
        return(
            <div className="film-row">
                <FilmPoster poster_path={this.props.film.poster_path} title={this.props.film.title} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{str.substring(0,4)}</p>
                </div>
                
            </div>
        )
    }
}

export default FilmRow;
{/* <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`}  alt="" /> */}