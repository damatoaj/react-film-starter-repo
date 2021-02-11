import React from 'react';
import { useState } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import './App.css';
import TMDB from './TMDB';


const App = () => {
  
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

    return (
     <div className="film-library">
       <FilmListing 
        films={TMDB.films}
        current={current}
      />
         
        <FilmDetails 
          films={TMDB.films}
          current={current}
        />
     </div>
    );
  
}

export default App;