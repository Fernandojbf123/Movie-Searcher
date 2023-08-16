

const ShowMovies = ({ movies }) => {
  
    return (
    <div>
      <ul className="flex flex-wrap gap-5">
                  {movies.map ( movie => (
                    <li 
                      key={movie.id}
                      className="w-[250px]">
                      <figure>
                        <img 
                          className="w-full h-[350px]"
                          src={movie.poster} 
                          alt={movie.title}/>
                          <figcaption>
                            <p>Year: <span>{movie.year}</span></p>
                            <p>Title: <span>{movie.title}</span></p>
                          </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
    </div>
  )
}

export default ShowMovies
