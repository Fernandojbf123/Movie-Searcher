import { useEffect, useState } from "react"

import resultMovies from "../../src/data/with-results.json"
import "../../src/data/no-results.json"


const useMovies = () => {

    let [hasResults, setHasResults] = useState(false)
    let [moviesList, setMoviesList] = useState([])

    useEffect ( () => {
      if (resultMovies?.Search.length>0){
        setHasResults(true)
  
        let movies = resultMovies?.Search.map ( (movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }));
  
        setMoviesList(movies)
      }
    },[])
  
  return { moviesList, hasResults}
}

export default useMovies
