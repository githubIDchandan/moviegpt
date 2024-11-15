import { useSelector } from "react-redux";
import MovieList from "./MovieList";



const GptMovieSuggestion=()=>{

    const {gptResult,tmdbMovies}=useSelector((store)=>store.gpt);
    if(!tmdbMovies)return null;
    

    return(
        <div className="mt-5">
            {
                gptResult?.map((item,index)=>{
                    return <MovieList  title={item} movies={tmdbMovies[index]}/>
                })
            }
        </div>
    )
}

export default GptMovieSuggestion;