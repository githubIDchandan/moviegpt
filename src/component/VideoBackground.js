import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";



const VideoBackground=({movieId})=>{
   
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);

    useMovieTrailer(movieId)

  

    return(
        <div className="">
            <iframe 
            className="aspect-video"
            width="100%"
          
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=x6a0TySx7bu8TP3Y&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key+""}
             title="YouTube video player" frameborder="0" allow="accelerometer; 
             autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerpolicy="strict-origin-when-cross-origin" 
             allowfullscreen>

             </iframe>
        </div>
    )
}


export default VideoBackground;