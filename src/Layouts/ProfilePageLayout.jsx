import { userStore } from "../userStore/user.Store"
import { Video } from "../components/video"
import { NavLink, Outlet} from "react-router-dom"

export default function ProfilePage()
{
    const user = userStore((state)=>state.user)
    return(
        <div className="flex w-[85%] justify-center items-center flex-col h-[100%] rounded-xl">
           <div className="w-[98%] h-[98%] ml-5 overflow-hidden">
                <div className=" items-center mb-3  ml-2 w-full flex  h-[14%]">
                        <div className=" rounded-full object-center w-[100px] h-[100px] overflow-hidden">
                            <img className="rounded-full object-center w-[100px] h-[100px]" src={user.avatar} alt="" />
                        </div>
                        <div>
                            <p className="font-bold text-3xl text-white">{user.username}</p>
                            <p className="font-light text-white">@username</p>
                        </div>
                </div>
                <div className="w-full h-[86%] overflow-y-auto overflow-x-hidden  scrollbar-hide">
                   <div className="flex gap-4">
                    <NavLink to="profile" className={({isActive})=>isActive?"bg-[#131313]  flex items-center justify-center p-2  rounded-2xl" :"flex items-center p-2 justify-center "}>
                        <p  className="text-white font-bold">home</p>
                    </NavLink>
                    <NavLink to="uservideos" className={({isActive})=>isActive?"bg-[#131313]  flex items-center justify-center p-2  rounded-2xl" :"flex items-center p-2 justify-center "}>
                        <p className="text-white font-bold">user Videos</p>
                    </NavLink>
                   </div>
                    <Outlet/>
                </div>
           </div>
        </div>
    )
}