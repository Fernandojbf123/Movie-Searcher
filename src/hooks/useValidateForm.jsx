import { useEffect, useState } from "react";

const useValidateForm = () => {
  
    let [movieToSearch, setMovieToSearch] = useState("")
    let [msg, setMsg] = useState("");
    let [isFormValid, setIsFormValid] = useState(true);
     

    useEffect ( () => {
        setTimeout ( () => {
          setMsg("")
          setIsFormValid(true)
        },5000)
      },[isFormValid])


    function validateFormData (formData)  {
        Object.keys(formData).map( objName => {
            let valueOfInput = formData[objName];
            if (valueOfInput === "" || isBlank(valueOfInput)) {
                setMsg("You must write a valid name to search")
                setIsFormValid(false)
                return
            }
            setMovieToSearch(valueOfInput)

        })

    }

    function isBlank (str) {
        return (!str || /^\s*$/.test(str));
      }

    return { validateFormData, isFormValid, msg, movieToSearch }
}

export default useValidateForm
