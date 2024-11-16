


const VideoTitle=({title,overview})=>{
    return(
        <div className="">
            {/* md:pt-60 md:mt-10 ml-10 */}
            <div className="absolute md:pt-60 md:mt-10 ml-10">
                <h1 className="hidden md:inline-block font-bold text-4xl text-white">{title}</h1>
                <p className="hidden md:block w-3/5 pt-4 text-gray-100">{overview}</p>
                <div>
                    <button className="bg-white hidden md:inline-block  text-black p-2 w-32 opacity-80 mt-2 text-lg rounded-sm">{"▷"}Play</button>
                    <button className="bg-slate-400 hidden md:inline-block text-white mx-4 p-2 w-40  mt-2 text-lg opacity-70 rounded-sm">{"ⓘ"}More Info</button>
                </div>
            </div>
        </div>
    )
}

export default VideoTitle;