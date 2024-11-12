import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO } from "../utils/constant";


const Header=()=>{

  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)
  console.log(user)
  const dispatch=useDispatch()
  const handlesignout=()=>{

    signOut(auth).then(() => {
        // navigate("/")
      }).catch((error) => {
        // An error happened.
        // navigate("/erroe")
      });


  }


  useEffect(()=>{
    console.log("login Loaded")
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      console.log("onauthchanges",user)
        if (user) {
            // console.log(user)
          const {uid,email,displayName} = user;
          console.log(uid,email,displayName)
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



    return(
        <div className="bg-yellow-400 bg-gradient-to-l from-black">
            {user&&<div className="flex justify-between">
           
                <div className="flex">
                <img alt="img" className="w-[100px] h-[80px] rounded-sm opacity-30 " src={LOGO}></img>
                <h2 className="m-auto mx-10 font-semibold text-2xl text-white font-sans">Welcome {user?.displayName}</h2>
                </div>
                {/* <img alt="img" src=" ../public/movielogo.png"></img> */}
                 <button className="bg-yellow-400 rounded-lg mx-3 w-28 h-11 font-semibold my-4 bg-gradient-to-r from-white"
                   onClick={handlesignout}
                 >Sign Out</button>

            </div>}
        </div>
    )
}

export default Header;