import React from 'react';
import { useState } from 'react';
import FilmRow from './FilmRow';

const FilmListing = (props) => {

    const [filter, setFilter] = useState('all')

    const handleFilterClick = (filter) => {
        setFilter({
            filter: filter  //had ''
        })
        console.log('Setting filter to ', filter)
    }

    const allFilms = props.films.map((film, index)=> {  //could do film and then key={film.id}
                    return ( <FilmRow film={film} key={`filmRow-${index}`} />)
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
                            <span className="section-count">0</span>
                        </div>
                    {allFilms}
                </div>
            
        )
}

export default FilmListing;