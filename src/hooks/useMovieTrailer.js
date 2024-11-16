import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";



const useMovieTrailer=(movieId)=>{


    const dispatch=useDispatch();

    const trailerVideo=useSelector((store)=>store.movies.trailerVideo);

    const getMovieTrailer=async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
        const json=await data.json();
 
     //    console.log("json",json.results[0])
 
     //    const filterData=json.results.filter((item)=>{
     //           return item.type="Trailer";
     //    })
     //    console.log(filterData)
        const trailer=json?.results[23];
        dispatch(addTrailerVideo(trailer));
 
    }
    
    useEffect(()=>{
      if(!trailerVideo)getMovieTrailer()
    },[])
 



}


export default useMovieTrailer;