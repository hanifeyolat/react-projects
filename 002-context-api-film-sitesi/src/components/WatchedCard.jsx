import React,{useContext} from 'react'
import { GlobalContext } from '../GlobalState'

const WatchedCard = ({movie}) => {
  const {RemoveFromWatched,AddToWatchlist} = useContext(GlobalContext)
  return (
    <div className="watchlist-movie-card" key={movie.id}>
    {movie.poster_path ? <img src={`https://www.themoviedb.org/t/p/w200/${movie.poster_path}`} alt={movie.poster_path} /> :  <div className='no-img'> ? </div>}

    <div className='movie-card-texts'>
            <h4>{movie.original_title}</h4>
            <div className='imdb'>
              <p>IMDB:</p> 
              <b>{movie.vote_average}</b>
            </div>
    </div>

        <button className='btn btn-green' data-movie ={movie} data-id={movie.id} onClick={(e) => AddToWatchlist({movie})} > İZLEYECEKLERİME EKLE</button>
        <button  className='btn btn-red'  data-movie ={movie} data-id={movie.id}  onClick={(e) => RemoveFromWatched ({movie})}> İZLEDİKLERİMDEN ÇIKAR</button>
</div>
  )
}

export default WatchedCard