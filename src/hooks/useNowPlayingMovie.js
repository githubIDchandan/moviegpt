import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";




const useNowPlayingMovie=()=>{

    const dispatch=useDispatch();
    const nowPlayingMovie=useSelector((store)=>store.movies.nowPlayingMovie)
    const getNowPlayingMovie=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
        const json=await data.json();
        // console.log("hii",json.results)
          dispatch(addNowPlayingMovies(json.results))
        }

        useEffect(()=>{
           if(!nowPlayingMovie) getNowPlayingMovie();
        },[])

       

}

export default useNowPlayingMovie;