import { Link, Outlet } from "react-router-dom"
import { ComponentOne } from "./ComponentOne"
import { ComponentTwo } from "./ComponentTwo"

export const DashBoard = () => {
    return(
        <>
        {/* <ComponentOne />
        <ComponentTwo /> */}
        <Link to= "1" >Compoennt one </Link>
        <Link to="2" > Component Two</Link>
        <Outlet />
        </>
    )
}