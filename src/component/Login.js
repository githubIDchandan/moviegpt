import { useRef, useState } from "react";
import { handleValidate } from "../utils/validate";


const Login=()=>{

    const [signIn,setSignIn]=useState(false);
    const [errorMsg,setErrorMsg]=useState(null)

   const handleSignIn=()=>{
         setSignIn(!signIn)
   }

   const email=useRef(null);
   const password=useRef(null);

  const handleForm=(e)=>{
    e.preventDefault();
   
    // console.log(email.current.value);
    // console.log(password.current.value)

    const checkValidation=handleValidate(email.current.value,password.current.value);
    // console.log(checkValidation)
    setErrorMsg(checkValidation)
   




  }

    return(
        <div className="bg-yellow-400 w-screen h-screen bg-gradient-to-t from-black flex items-center justify-center">
            <div  className="bg-white w-5/12  rounded-lg bg-gradient-to-t from-yellow-700 ">
                <div className="p-2 ">
                    <h1 className="font-semibold text-2xl">{signIn?"Sign up":"Sign In"}</h1>
                </div>
                <div>
                <form onSubmit={handleForm} className="flex flex-col">
                    {signIn&&<input type="text" className="bg-gray-500 p-4 m-2 rounded-lg bg-gradient-to-l from-yellow-700" placeholder="Your Name"></input>}
                    <input ref={email} type="text" className="bg-gray-500 p-4 m-2 rounded-lg bg-gradient-to-l from-yellow-700" placeholder="Email Address"></input>
                    <input ref={password} type="password" className="bg-gray-500 p-4 m-2 rounded-lg bg-gradient-to-l from-yellow-700" placeholder="Password"></input>
                    <p className="text-red-800 font-bold mx-3">{errorMsg}</p>
                    <button type="submit" className="bg-black text-white p-4 m-2 text-lg rounded-lg bg-gradient-to-l from-yellow-700  ">Submit</button>
                    <div className="flex mx-3 my-2">
                        <p className="text-lg">{signIn===false?"New User?":"Already Registered?"}</p>
                        <p className="text-lg cursor-pointer border-yellow-900 hover:border-black border-b-2" onClick={handleSignIn}> {signIn===false?"Register Now":"Please login"}</p>
                    </div>
                    
                </form>
                </div>
            </div>
        </div>
    )

}

export default Login;