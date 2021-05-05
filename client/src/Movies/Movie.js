import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useLocation} from 'react-router-dom';
import MovieCard from './MovieCard';
export default function Movie(props) {
  const {addToSavedList} = props;
  const [movie, setMovie] = useState(null);
  const [movieId, setMovieId] = useState(null);
  const {id} = useParams();
  const loc = useLocation();
  console.log(loc);
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL
  if(movieId !== id){
    setMovieId(id);
  }
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${movieId}`) // Study this endpoint with Postman
      .then(response => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [movieId]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }


  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} isDetailed={true}></MovieCard>
      <div className="save-button" onClick={()=>addToSavedList(movie.id)}>Save</div>
    </div>
  );
}
