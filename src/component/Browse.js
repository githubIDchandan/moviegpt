import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainerContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTop_Rated from "../hooks/useTop_Rated";
import useUpcoming from "../hooks/useUpcoming";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse=()=>{
    const toggleView=useSelector((store)=>store.gpt.toggleView)
    useNowPlayingMovie();
    usePopular();
    useTop_Rated();
    useUpcoming();
    
    return(
        <div className="">
           <Header/>
            {toggleView===false?(<>
                <MainContainer/>
                <SecondaryContainerContainer/>
            </>):<GptSearchPage/>}
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