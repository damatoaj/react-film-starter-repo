import React from 'react';
import { useState } from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import './App.css';
import TMDB from './TMDB';


const App = () => {
  
  const [films, setFilms] = useState(TMDB.films)
  const [current, setCurrent] = useState({})

  let handleDetailsClick = (film) => {
    console.log("fetching details for ", film)
    setCurrent(film)

}


    return (
     <div className="film-library">
       <FilmListing 
        films={TMDB.films}
        current={current}
        handleDetailsClick={handleDetailsClick}
      />
         
        <FilmDetails 
          films={TMDB.films}
          current={current}
        />
     </div>
    );
  
}

export default App;