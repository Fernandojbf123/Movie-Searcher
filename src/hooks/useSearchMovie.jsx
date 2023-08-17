import { useEffect, useState } from "react"

//import resultMovies from "../data/with-results.json"
//import "../data/no-results.json"


const useSearchMovies = (  ) => {

    const url = "https://www.omdbapi.com/?apikey=4287ad07&s="

    let [hasResults, setHasResults] = useState(false)
    let [moviesList, setMoviesList] = useState([])
    let [mappedMovies, setMappedMovies] = useState([]);
    let [errorMsg, setErrorMsg] = useState("")
    let [isLoading, setIsLoading] = useState(false);
  

    useEffect ( () => {
      if (moviesList.length>0){
        setHasResults(true)
        let movies = moviesList.map ( (movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }));
  
        setMappedMovies(movies)
      }
    },[moviesList])

    async function fetchMovies() {
      console.log(url)
      // setErrorMsg("")
      // setIsLoading(true)
      // try {
      //   const response = await fetch(`${url} ${movieToSearch}`)
      //   const result = await response.json();
      //   setMoviesList(result.Search)
      //   setIsLoading(false)
      // } catch (error) {
      //   console.log(error)
      //   setErrorMsg("Could not connect to DB")
      //   setIsLoading(false)
      // }
    }
  
  return { fetchMovies, mappedMovies, hasResults, errorMsg, isLoading }
}

export default useSearchMovies
