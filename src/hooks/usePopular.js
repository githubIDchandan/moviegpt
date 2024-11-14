import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopular } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";




const usePopular=()=>{

    const dispatch=useDispatch();

    const getPopularMovie=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS);
        const json=await data.json();
        // console.log("hii",json.results)
          dispatch(addPopular(json.results))
        }

        useEffect(()=>{
            getPopularMovie();
        },[])

       

}

export default usePopular;