import { useSelector } from "react-redux";
import langConstant from "../utils/languageConstant";


const GptSearchBar=()=>{

  const langKey=useSelector((store)=>store.config.lang);


    return(
        <div className="mt-32 ml-32">
            <form className="" onSubmit={(e)=>e.preventDefault()}>
                <input className="w-[50%] p-4 text-lg rounded-sm border border-black" placeholder={langConstant[langKey].placeholder}></input>
                <button className="bg-red-600 text-white p-4  w-40 ml-2 rounded-sm text-xl">{langConstant[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;