import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constant";
import { addToggleView } from "../store/gptSlice";
import { addLang } from "../store/langConfig";


const Header=()=>{

  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const toggleView=useSelector((store)=>store.gpt.toggleView)
  console.log(user)
  const dispatch=useDispatch()
  const handlesignout=()=>{

    signOut(auth).then(() => {
        // navigate("/")
      }).catch((error) => {
        // An error happened.
        // navigate("/error")
      });


  }


  useEffect(()=>{
    console.log("login Loaded")
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      // console.log("onauthchanges",user)
        if (user) {
            // console.log(user)
          const {uid,email,displayName} = user;
          // console.log(uid,email,displayName)
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        //   you can not navigate from here navigete from child of RouterProvider
        //   other soln. is use window.location.href
          navigate("/browse")
        } else {
          // User is signed out
          console.log("/callled")
          dispatch(removeUser());
          navigate("/")
        }
      });
      // if we call unsubscribe function it will remove onAuthStateChanged from browser.
      // when header component unload it will unsubscribe.
      return ()=> unsubscribe();
  },[])

    const handleGptClick=()=>{
         dispatch(addToggleView())
    }
  
  const handleSelect=(e)=>{

    dispatch(addLang(e.target.value));

  }


    return(
        <div className="bg-blue-900 md:bg-black   md:fixed z-10 w-full opacity-90">
            {user&&<div className="flex flex-col md:flex-row justify-between">
           
                <div className="flex mx-auto md:mx-0">
                {/* <img alt="img" className="w-[100px] h-[80px] rounded-sm opacity-30 " src={LOGO}></img> */}
                <h2 className="m-auto mx-10   text-2xl text-white font-thin">Welcome {user?.displayName}</h2>
                </div>
                {/* <img alt="img" src=" ../public/movielogo.png"></img> */}
                <div className="text-center">
                  {toggleView&&<select className="p-1 m-2 bg-black text-white border border-white rounded-sm" onChange={handleSelect}>
                    {SUPPORTED_LANGUAGE.map((item)=>{
                      return <option key={item.identifier} value={item.identifier}>{item.name}</option>
                    })}
                  </select>}
                <button className={toggleView===true?"bg-red-800 text-white p-2 w-28":"bg-purple-800 text-white p-2 w-28"}
                   onClick={handleGptClick}
                >{toggleView===true?"Home":"GPT Search"}</button>
                 <button className="bg-yellow-800 text-black rounded-sm mx-3 w-28 h-11 font-semibold my-4 bg-gradient-to-b from-white"
                   onClick={handlesignout}
                 >Sign Out</button>
                </div>

            </div>}
        </div>
    )
}

export default Header;