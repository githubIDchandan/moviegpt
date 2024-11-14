import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";


const GptSearchPage=()=>{
    return(
        <div className=" absolute m-8 z-20 w-full">
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    )
}

export default GptSearchPage;