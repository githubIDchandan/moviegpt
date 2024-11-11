import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header=()=>{

  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)
  console.log(user)

  const handlesignout=()=>{

    signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
        // An error happened.
        navigate("/erroe")
      });


  }


    return(
        <div className="bg-yellow-400 bg-gradient-to-l from-black">
            <div className="flex justify-between">
           
                <div className="flex">
                <img alt="img" className="w-[100px] h-[80px] rounded-sm opacity-30 " src=" https://images-platform.99static.com//3cAFNMIJLmYgtYdMGPvlGU6IbPg=/516x287:1516x1290/fit-in/500x500/projects-files/71/7122/712217/a0fe9136-b485-4f2c-9cfb-7dd4a98c8753.png"></img>
                <h2 className="m-auto mx-10 font-semibold text-2xl text-white font-sans">Welcome {user?.displayName}</h2>
                </div>
                {/* <img alt="img" src=" ../public/movielogo.png"></img> */}
                 <button className="bg-yellow-400 rounded-lg mx-3 w-28 h-11 font-semibold my-4 bg-gradient-to-r from-white"
                   onClick={handlesignout}
                 >Sign Out</button>

            </div>
        </div>
    )
}

export default Header;