import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
    handleDetailsClick = (film) => {
        console.log('Fetching details for ', film)
    }

    render() {
        const str = this.props.film.release_date
        return(
            <div onClick={() => this.handleDetailsClick(this.props.film)} className="film-row">
                <FilmPoster poster_path={this.props.film.poster_path} title={this.props.film.title} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{str.substring(0,4)}</p>
                </div>
                <Fave />
            </div>
        )
    }
}

export default FilmRow;