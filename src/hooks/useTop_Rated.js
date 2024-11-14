import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addTopRated } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";




const useTop_Rated=()=>{

    const dispatch=useDispatch();

    const getTop_RatedMovie=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
        const json=await data.json();
        // console.log("hii",json.results)
          dispatch(addTopRated(json.results))
        }

        useEffect(()=>{
            getTop_RatedMovie();
        },[])

       

}

export default useTop_Rated;