import useValidateForm from "../hooks/useValidateForm";


const Header = ({ fetchMovies }) => {
   
    const { validateFormData, isFormValid, msg, movieToSearch } = useValidateForm({FormData})

    async function handleSubmit (e) {
        e.preventDefault()
        console.log(movieToSearch)
        const formData = Object.fromEntries( new window.FormData (e.target)) //fields
        validateFormData(formData)
        
    }

   
  return (

    <div className="w-full bg-slate-400 p-5">
    <h1 className="text-center mx-auto text-2xl font-bold text-gray-900">Movie finder</h1>
    
    <form
        className="flex justify-center gap-10 p-5"
        onSubmit={ handleSubmit}>
        <input
            className="w-[300] h-[40px] shadow border-l-purple-600 rounded-md" 
            name="movieToSearch"
            type="text" 
            placeholder="X-Men, Ender's games" 
            />
   
        <input
            className="w-[150px] h-[40px] shadow rounded-md bg-purple-800 hover:bg-purple-600 cursor-pointer text-white font-bold" 
            type="submit" 
            value={"BUSCAR"}/>
    </form>

    {!isFormValid && <p className="text-white font-bold p-3 bg-red-700 rounded-md w-1/3 mx-auto text-center">{msg}</p>}


    </div>
  )
}

export default Header
