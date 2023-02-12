import React,{useContext} from 'react'
import { GlobalContext } from '../GlobalState'

const WatchListCard = ({movie}) => {
  const {RemoveFromWatchlist,AddToWatched} = useContext(GlobalContext)

  return (
    <div className="watchlist-movie-card" key={movie.id}>
        {
        movie.poster_path ? 
        <img src={`https://www.themoviedb.org/t/p/w200/${movie.poster_path}`} alt={movie.poster_path}  /> : 
        <div className='no-img'> ? </div>
        }

        <div className='movie-card-texts'>
                <h4>{movie.original_title}</h4>
                <div className='imdb'>
                  <p>IMDB:</p> 
                  <b>{movie.vote_average}</b>
                </div>
        </div>

            <button className='btn btn-green' data-id={movie.id} data-movie ={movie} onClick={ (e) => RemoveFromWatchlist({movie})} > İZLEYECEKLERİMDEN ÇIKAR</button>
            <button  className='btn btn-red' data-id={movie.id} data-movie ={movie} onClick={(e) => AddToWatched({movie})}> İZLEDİKLERİME EKLE</button>

    </div>
  )
}

export default WatchListCard