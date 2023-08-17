import Header from "./components/Header"
import ShowMovies from "./components/ShowMovies"
import NoMoviesFound from "./components/NoMoviesFound"
import useSearchMovies from "./hooks/useSearchMovie"

function App() {

 const { fetchMovies, mappedMovies, hasResults, errorMsg, isLoading } = useSearchMovies("")
 


  return (
    <div className="w-full bg-slate-300">
         <Header
            fetchMovies={fetchMovies} 

         />

          <main className="md:w-3/5 w-full mx-auto px-3 py-5">
              
              {hasResults ? (
                <ShowMovies 
                  movies={mappedMovies}/>
              ):
              (
                <NoMoviesFound />
              )}
          </main>

    </div>
  )
}

export default App
