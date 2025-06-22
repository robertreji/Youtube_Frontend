import Navbar from "../components/NavBar/navBar";
import SideBar from "../pages/sideBar";
import { Outlet } from "react-router-dom";

export default function HomeLayout()
{
 
    return(
        <> 
        <div className="w-full h-[8%]">
            <Navbar/>
        </div>
            
            <div className="w-full flex h-[92%]">
                <SideBar/>
                <Outlet/>
            </div>
        </>
    )
}