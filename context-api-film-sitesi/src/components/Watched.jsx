import React, {useContext} from 'react'
import { GlobalContext } from '../GlobalState'
import WatchedCard from './WatchedCard'

const Watched = () => {
  var {state} =useContext(GlobalContext)
  return (
    <div className='main-container'>
        {state.watched.length>0 ? 
          state.watched.map( movie => <WatchedCard movie={movie}/>)
          : <h1 className='no-film'>Film Ekleyiniz...</h1>
        }
    </div>
  )
}

export default Watched
