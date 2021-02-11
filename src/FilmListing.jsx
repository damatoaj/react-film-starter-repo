import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
    constructor(props){
        super(props)
        this.state = {
            filter: 'all'
        }
    }
    handleFilterClick = (filter) => {
        this.setState({
            filter: filter  //had ''
        })
        console.log('Setting filter to ', filter)
    }

    render() {
         const allFilms = this.props.films.map((film, index)=> {  //could do film and then key={film.id}
            return ( <FilmRow film={film} key={`filmRow-${index}`} />)
         })
        return(
            <div className="film-list">
                <h1 className="section-title">Films</h1>
                    <div 
                        onClick={(e) => this.handleFilterClick('all')}
                        className={`film-list-filter ${this.state.filter === 'all' ? 'is-active': ''}`}>
                        ALL 
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div 
                        onClick={(e) => this.handleFilterClick('faves')} 
                        className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : '' }`}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                {allFilms}
            </div>
        )
    }
}

export default FilmListing;