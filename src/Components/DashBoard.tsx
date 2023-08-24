import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const DashBoard = () => {
   const message = useLocation();
   useEffect(()=>{
    console.log(message.state)
   },[message.state])
    return(
        <>
        <Link to= "1" >Compoennt one </Link>
        <Link to="2" > Component Two</Link>
        <Outlet />
        </>
    )
}