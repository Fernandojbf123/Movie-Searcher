import { useEffect, useRef, useState } from "react"


const Header = () => {


    let [isEmptyStr, setIsEmptyStr] = useState(false);
    let [msg, setMsg] = useState("");

    const movieToSearchRef = useRef();

    async function handleSubmit (e) {
        e.preventDefault()
        const movieName = movieToSearchRef.current.value;
        if (movieName === "" || isBlank(movieName) ){
          setMsg("You must write a valid name to search")
          setIsEmptyStr(true)
          return
        }
        console.log(movieName)
        //setMoviesList(data)
    }

    function isBlank (str) {
      return (!str || /^\s*$/.test(str));
    }

    useEffect ( () => {
      setTimeout ( () => {
        setMsg("")
        setIsEmptyStr(false)
      },5000)
    },[isEmptyStr])
    

  return (

    <div className="w-full bg-slate-400 p-5">
    <h1 className="text-center mx-auto text-2xl font-bold text-gray-900">Movie finder</h1>
    
    <form
        className="flex justify-center gap-10 p-5"
        onSubmit={ handleSubmit}>
        <input
            className="w-[300] h-[40px] shadow border-l-purple-600 rounded-md" 
            type="text" 
            placeholder="X-Men, Ender's games" 
            ref={movieToSearchRef}
            />
        <input
            className="w-[150px] h-[40px] shadow rounded-md bg-purple-800 hover:bg-purple-600 cursor-pointer text-white font-bold" 
            type="submit" 
            value={"BUSCAR"}/>
    </form>

    {isEmptyStr && <p className="text-white font-bold p-3 bg-red-700 rounded-md w-1/3 mx-auto text-center">{msg}</p>}

    </div>
  )
}

export default Header
