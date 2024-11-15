import { useDispatch, useSelector } from "react-redux";
import langConstant from "../utils/languageConstant";
import client from "../utils/openai";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResult } from "../store/gptSlice";


const GptSearchBar=()=>{

  const dispatch=useDispatch();
  const langKey=useSelector((store)=>store.config.lang);
   const gptText=useRef();
  
   const searchMovieTMDB=async(item)=>{
      const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+item+"&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      )
      const json=await data.json();

      console.log(json);
      return json.results;
   }

  const handleGptClick=async()=>{
    
//     const gptQuery="Act as movie Recommendation system and suggest some movie for the query :"
//     + gptText.current.value+
//     "only give me names of 5 movies , comma seperated like the example given ahead. Example Result: Gadar , Sholey , Don , Golmaal, Koi mil Gaya";


//     const chatCompletion = await client.chat.completions.create({
//     messages: [{ role: 'user', content: gptQuery }],
//     model: 'gpt-3.5-turbo',

//   });
  const movieResult={
    content:"Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan"
  }
  const gptMovieArr=movieResult.content.split(", ");

//   For Each Movie i will search TMDB api.
//   HERE YOU CAN REDUCE FUNTION  
  const PromiseArr = gptMovieArr.map((item)=>{
    console.log(item)
        return searchMovieTMDB(item);
     })
    /****
     * 
     *  this will not give the result, 'searchMovieTMDB' is async function. 
        basically it will return me a promisee not the result.->
        5times searchMovieTMDB API will call for each time it will not wait map function make 5 call immediatly 
        it will not wait to one call to finish
        beacuse search movie have not completed the api call it will take some time to retuen the result
        in that place it will give me 5 Promises
     *  [Promise,Promise,Promise,Promise,Promise]
     * **/
 
    //  to get data from promise array
    //  await -> now programm will wait to resolve the promise;
    const data=await Promise.all(PromiseArr);
    console.log(data)
     dispatch(addGptMovieResult({movieName:gptMovieArr,allMovieTmdb:data}))
    //   console.log(gptMovieArr)
    //   console.log(gptText.current.value)
    //   console.log("hlww")
  }



    return(
        <div className="mt-32 ml-32">
            <form className="" onSubmit={(e)=>e.preventDefault()}>
                <input ref={gptText} className="w-[50%] p-4 text-lg rounded-sm border border-black" placeholder={langConstant[langKey].placeholder}></input>
                <button className="bg-red-600 text-white p-4  w-40 ml-2 rounded-sm text-xl"
                  onClick={handleGptClick}
                >{langConstant[langKey].search}</button>
            </form>
            <div>
                <h1 className="bg-red-100 w-fit">Below GPT Result:"Funny Indian Retro Movie"</h1>
            </div>
        </div>
    )
}

export default GptSearchBar;