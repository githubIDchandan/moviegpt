import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addUpcomming } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";




const useUpcoming=()=>{

    const dispatch=useDispatch();
   const upcoming=useSelector((store)=>store.movies.upcoming);
    const getUpcomingMovie=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
        const json=await data.json();
        // console.log("hii",json.results)
          dispatch(addUpcomming(json.results))
        }

        useEffect(()=>{
          if(!upcoming) getUpcomingMovie();
        },[])

       

}

export default useUpcoming;