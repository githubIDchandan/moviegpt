import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";




const MainContainer=()=>{

   const movies=useSelector((store)=>store.movies?.nowPlayingMovie)


    return(
        <div>
            MainContainer
            <VideoTitle/>
            <VideoBackground/>
        </div>
    )
  }

  export default MainContainer;