import React from 'react';
import { useState } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import './App.css';
import TMDB from './TMDB';


const App = () => {
  
  const [films, setFilms] = useState(TMDB.films)
    return (
     <div className="film-library">
       <FilmListing films={TMDB.films} />
         
        <FilmDetails films={TMDB.films} />
     </div>
    );
  
}

export default App;