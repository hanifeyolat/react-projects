

import React, {useReducer,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";
import { GlobalContext } from './GlobalState';
import { act } from 'react-dom/test-utils';

const App = () => {
  
  const [state,dispatch] = useReducer(AppReducer, {
    watchlist: localStorage.getItem("watchlist") ? [...JSON.parse(localStorage.getItem("watchlist"))] : [],
    watched:localStorage.getItem("watched") ? [...JSON.parse(localStorage.getItem("watched"))] : []
  })
  useEffect(() => {
    localStorage.setItem("watchlist" , JSON.stringify(state.watchlist))
    localStorage.setItem("watched" , JSON.stringify(state.watched))
  }, [state])
  

  function AppReducer ( state,action) {
      switch(action.type) {
        case "ADD_TO_WATCHLIST": 
          return {
            ...state, 
            watchlist: state.watchlist.find(movie => movie.id==action.payload.id) ? [...state.watchlist] :  [...state.watchlist , action.payload],
            watched: state.watched.filter( movie => movie.id!==action.payload.id)
          }
        case "REMOVE_FROM_WATCHLIST": 
        return {
          ...state, 
          watchlist: state.watchlist.filter( movie => movie.id !== action.payload.id),
        }
        case "ADD_TO_WATCHED": 
        return {
          ...state, 
          watched: state.watched.find(movie => movie.id==action.payload.id) ? [...state.watched] :  [...state.watched , action.payload],
          watchlist: state.watchlist.filter( movie => movie.id!==action.payload.id)
        }
        case "REMOVE_FROM_WATCHED": 
        return {
          ...state, 
          watched: state.watched.filter( movie => movie.id !== action.payload.id) ,
        }
        default:
          return state;
      }
  }
  function AddToWatchlist ({movie}) {
    dispatch({type: "ADD_TO_WATCHLIST" , payload: movie })
    console.log("tiklandi")
  }
  function RemoveFromWatchlist ({movie}) {
    dispatch({type: "REMOVE_FROM_WATCHLIST" , payload: movie })
    console.log("tiklandi")
  }
  function AddToWatched ({movie}) {
    dispatch({type: "ADD_TO_WATCHED" , payload: movie})
    console.log("tiklandi")
  }
  function RemoveFromWatched ({movie}) {
    dispatch({type: "REMOVE_FROM_WATCHED" , payload: movie })
    console.log("tiklandi")
  }


  return (
    <div className='app-container'>
      <GlobalContext.Provider 
      value={{state,dispatch,AppReducer,AddToWatchlist,RemoveFromWatchlist,AddToWatched,RemoveFromWatched}} >
            <Router>
              <Header />
             
              <Routes>
                <Route path="/" element={<Add />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/watched" element={<Watched />} />
                <Route path="/add" element={<Add />} />
              </Routes>
            
          </Router>
    </GlobalContext.Provider>
    </div>
  )
}

export default App