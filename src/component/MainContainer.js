import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";




const MainContainer=()=>{

   const movies=useSelector((store)=>store.movies?.nowPlayingMovie);
   if(!movies)return;
//    console.log("movies",movies)
   const firstMovie=movies[0];
   const {original_title,overview,id}=firstMovie;
   console.log("firstMovie",firstMovie)
   console.log("idd",id)

    return(
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
  }

  export default MainContainer;