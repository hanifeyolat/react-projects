import React,{useState} from 'react'
import MovieCard from './MovieCard'

const Add = () => {
  const [input,setInput] = useState("")
  const [data , setData] = useState([])

  function onChange (e) {
      setInput(e.target.value.toLowerCase()) 

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then((res) => res.json())
        .then(veri => {
          if(!veri.error) {
            setData(veri.results)
            console.log("data fetch: ",data)
          }else{
            setData([])
          }
        })
      }
  return (
   <>
    <div className='banner-area'>
      <h1> HOŞGELDİNİZ</h1>
      <h3> Milyonlarca film, TV şovu ve keşfedilecek kişi. 
        <br/>Şimdi keşfedin.</h3>
        <form>
              <input type="text" 
                    value={input}
                    onChange={onChange} 
                    className='search-input' 
                    placeholder='Film, dizi, kişi ara...'/>
        </form>
    </div>

    <div className='movie-list-area'>
      {
        data ?  data.map( movie => <MovieCard movie={movie} />) : ""
      }
    </div>

    
   
   </>  
   
  )
}

export default Add
