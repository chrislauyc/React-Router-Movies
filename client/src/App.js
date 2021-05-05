import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import { Route, Switch } from 'react-router-dom';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    if(!(saved.find((movie)=>movie.id===id))){
      let movieToSave = movieList.find((movie)=>movie.id===id);
      setSaved([...saved,movieToSave]);
    }
  };

  return (
    <div>
      <SavedList list={saved} />
      <div>
        <Switch>
          <Route exact path='/'>
            <MovieList movies={movieList}></MovieList>
          </Route>
          <Route exact path='/movies/:id'>
            <Movie addToSavedList={addToSavedList}/>
          </Route>
          <Route exact path=''>
            {/* NoMatch */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}
