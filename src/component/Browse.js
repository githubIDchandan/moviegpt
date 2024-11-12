import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainerContainer from "./SecondaryContainer";

const Browse=()=>{
   
    useNowPlayingMovie();
    
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