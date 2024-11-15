import { CDN_POSTER_URL } from "../utils/constant";



const MovieCard=({item})=>{
    if(!item.poster_path)return null;
    console.log("item",item)
    return(
        <div className="">
            <img className="w-[150px] p-1  cursor-pointer hover:bg-white rounded-sm" alt="poster" src={CDN_POSTER_URL+item.poster_path}></img>
        </div>
    )
}

export default MovieCard;