import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';
export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id} style={{textDecoration:'none',color:'inherit'}}>
          <MovieCard movie={movie} isDetailed={false}/>
        </Link>
      ))}
    </div>
  );
}