import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainerContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTop_Rated from "../hooks/useTop_Rated";
import useUpcoming from "../hooks/useUpcoming";

const Browse=()=>{
   
    useNowPlayingMovie();
    usePopular();
    useTop_Rated();
    useUpcoming();
    
    return(
        <div>
           <Header/>
           <MainContainer/>
            <SecondaryContainerContainer/>
            {/* 
               MainContainer
                    - VideoBackground
                    - VideoTitle
               SecondaryContainer
                    - MovieList*n
                    - cards*n
            
            */}
        </div>
    )
}

export default Browse;