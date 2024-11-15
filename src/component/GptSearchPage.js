import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GptSearchPage=()=>{
    return(
        <div className=" absolute  w-full">
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
}

export default GptSearchPage;