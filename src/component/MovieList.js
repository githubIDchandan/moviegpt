import MovieCard from "./MovieCard";



const MovieList=({title,movies})=>{
    return(
        <div className="bg-black ">
             <h1 className="p-1 text-lg md:text-2xl mx-2 font-semibold text-white ">{title}</h1>
             <div className="flex flex-wrap ">
               
                
                    {
                         movies?.map((item)=>{
                         return <MovieCard key={item.id} item={item}/>
                             })
                    }
              
             </div>
             
           
            
      
        </div>
    )
}


export default MovieList;