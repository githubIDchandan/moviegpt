import { useRef, useState } from "react";
import { handleValidate } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";


const Login=()=>{

    const [signIn,setSignIn]=useState(false);
    const [errorMsg,setErrorMsg]=useState(null)
    const navigate=useNavigate();
    const dispatch=useDispatch();
   const handleSignIn=()=>{
        console.log(signIn)
         setSignIn(!signIn)
   }

   const email=useRef(null);
   const password=useRef(null);
   const name=useRef(null)

  const handleForm=(e)=>{
    e.preventDefault();
   
    // console.log(email.current.value);
    // console.log(password.current.value)

    const checkValidation=handleValidate(email.current.value,password.current.value);
    // console.log(checkValidation)
    setErrorMsg(checkValidation)
    if(checkValidation)return;
    console.log(signIn)
    if(signIn===true){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // fetching id,email,name from the updated value. you cant write user only it will not reflect the changes
            const {uid,email,displayName}=auth.currentUser;
             dispatch(addUser({uid:uid,email:email,displayName:displayName}))
             navigate("/browse")
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+" "+errorMessage)
        });
      
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode+" "+errorMessage)
      });
    }
   



  }

    return(
        <div className="bg-yellow-400 w-screen h-screen bg-gradient-to-t from-black flex items-center justify-center">
            <div  className="bg-white w-5/12  rounded-lg bg-gradient-to-t from-yellow-700 ">
                <div className="p-2 ">
                    <h1 className="font-semibold text-2xl">{signIn?"Sign up":"Sign In"}</h1>
                </div>
                <div>
                <form onSubmit={handleForm} className="flex flex-col">
                    {signIn&&<input ref={name} type="text" className="bg-gray-500 p-4 m-2 rounded-lg bg-gradient-to-l from-yellow-700" placeholder="Your Name"></input>}
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