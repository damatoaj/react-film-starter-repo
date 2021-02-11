import React from 'react';
import { useState } from 'react';
import FilmRow from './FilmRow';

const FilmListing = (props) => {

    const [filter, setFilter] = useState('all');
    const [faves, setFaves] = useState([]);

    const handleFaveToggle = (film) => {
        let newFaves = [...faves];
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex < 0 ) {
            console.log(`adding ${film.title}`)
            newFaves = [...newFaves, film];
        } else {
            console.log(`removing ${film.title}`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }


    const handleFilterClick = (filter) => {
        setFilter({
            filter: filter  //had ''
        })
        console.log('Setting filter to ', filter)
    }

    const filmsToDisplay = filter === 'all' ? props.films : faves;

    const allFilms = filmsToDisplay.map((film, index)=> {  //could do film and then key={film.id}
                    return ( 
                        <FilmRow 
                            film={film}
                            key={`filmRow-${index}`}
                            onFaveToggle={handleFaveToggle}
                            isFave={faves.includes(film)}
                            handleDetailsClick={props.handleDetailsClick}
                        />)
                    })

        return(
            
                <div className="film-list">
                    <h1 className="section-title">Films</h1>
                        <div 
                            onClick={(e) => handleFilterClick('all')}
                            className={`film-list-filter ${filter === 'all' ? 'is-active': ''}`}>
                            ALL 
                            <span className="section-count">{props.films.length}</span>
                        </div>
                        <div 
                            onClick={(e) => handleFilterClick('faves')} 
                            className={`film-list-filter ${filter === 'faves' ? 'is-active' : '' }`}>
                            FAVES
                            <span className="section-count">{faves.length}</span>
                        </div>
                    {allFilms}
                </div>
            
        )
}

export default FilmListing;