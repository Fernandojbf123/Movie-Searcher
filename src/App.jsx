import Header from "./components/Header"
import ShowMovies from "./components/ShowMovies"
import NoMoviesFound from "./components/NoMoviesFound"
import useMovies from "./hooks/useMovies"

function App() {

 const {moviesList, hasResults } = useMovies()
   


  return (
    <div className="w-full bg-slate-300">
         <Header />

          <main className="md:w-3/5 w-full mx-auto px-3 py-5">
              
              {hasResults ? (
                <ShowMovies 
                  movies={moviesList}/>
              ):
              (
                <NoMoviesFound />
              )}
          </main>

    </div>
  )
}

export default App
