import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = (props) => {
    // let handleDetailsClick = (film) => {
    //     console.log("fetching details for ", film)
    // }

    return (
        <div>
            <div onClick={(e) => props.handleDetailsClick(props.film)} className="film-row">
                <FilmPoster 
                    poster_path={props.film.poster_path} 
                    title={props.film.title}  
                />
                <div className="film-summary">
                    <h1>{props.film.title}</h1>
                    <p>{props.film.release_date.substring(0,4)}</p>
                </div>
                <Fave  
                    onFaveToggle={() => {props.onFaveToggle(props.film)}}
                    isFave={props.isFave}
                />
            </div>  
        </div>
    )

}

export default FilmRow;