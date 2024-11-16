import { useSelector } from "react-redux";
import MovieList from "./MovieList";

 


 
const SecondaryContainerContainer=()=>{


    const movies=useSelector((store)=>store.movies)


    return(
        <div className="-mt-46 md:-mt-36">
            {/* 
               MovieList - Popular
                   moviecard*n;
               MovieList - Now Playing
               MovieList - Trendind
               MovieList - Horror
            
            
            */}
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
            <MovieList title={"Popular"} movies={movies.popular}/>
            <MovieList title={"Top Rated"} movies={movies.topRated}/>
            <MovieList title={"Upcoming"} movies={movies.upcoming}/>
        </div>
    )
  }

  export default SecondaryContainerContainer;