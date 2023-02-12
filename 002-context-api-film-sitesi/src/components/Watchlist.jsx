import React, {useContext} from 'react'
import WatchlistCard from './WatchListCard'
import { GlobalContext } from '../GlobalState'


const Watchlist = () => {
  var {state} =useContext(GlobalContext)
  return (
    <div className='main-container'>
        {state.watchlist.length>0 ? 
          state.watchlist.map( movie => <WatchlistCard movie={movie}/>)
          :  <h1 className='no-film'>Film Ekleyiniz...</h1>
        }
    </div>
  )
}

export default Watchlist
