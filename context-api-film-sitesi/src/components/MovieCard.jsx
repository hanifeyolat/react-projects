import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalState'

const MovieCard = ({movie}) => {
    var {state,AddToWatchlist,AddToWatched} =useContext(GlobalContext)

    const IsThereThisMovieInWatchlist= state.watchlist.find( veri =>( Number(veri.id) == Number(movie.id)))? true : false
    const IsThereThisMovieInWatched= state.watched.find( veri =>( Number(veri.id) == Number(movie.id)))? true : false

  return (
    <div className="movie-card" key={movie.id}>
            {movie.poster_path ?
            <img src={`https://www.themoviedb.org/t/p/w200/${movie.poster_path}`} /> : 
            <div className='no-img'> ? </div>}
            <div className='movie-card-texts'>
                    <h3>{movie.original_title}</h3>
                    <p>IMDB: <b>{movie.vote_average}</b></p>
            </div>
            <button className='btn btn-green' disabled={IsThereThisMovieInWatchlist} data-id={movie.id} onClick={(e) => AddToWatchlist ({movie})}> İZLEYECEKLERİME GÖNDER</button>
            <button disabled={IsThereThisMovieInWatched ? true : IsThereThisMovieInWatchlist ? true : false} className='btn btn-red' data-id={movie.id} onClick={(e) => AddToWatched({movie})}> İZLEDİKLERİME EKLE</button>

    </div>
  )
}

export default MovieCard