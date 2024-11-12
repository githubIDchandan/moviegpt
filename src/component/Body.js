import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";





const Body=()=>{

 
   const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
   ])
 console.log("body rendered")
  // useEffect(()=>{

  //   onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //           // console.log(user)
  //         const {uid,email,displayName} = user;
  //         console.log(uid,email,displayName)
  //         dispatch(addUser({uid:uid,email:email,displayName:displayName}));
  //       //   you can not navigate from here navigete from child of RouterProvider
  //       //   other soln. is use window.location.href
  //       //   navigate("/browse")
  //       } else {
  //         // User is signed out
  //         dispatch(removeUser());
  //       //   navigate("/")
  //       }
  //     });


  // },[])

    return(
        <div>
           
           <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;