
import { useNavigate } from "react-router-dom"
import { userStore } from "../../userStore/user.Store"
import UploadFiles from "../fileUploads/videoUploader"
import axios from '../axios'

export default function Navbar()
{
    const user= userStore((state)=>state.user)
    const navigate = useNavigate((state)=>state.user)
    const setIsLoggedIn = userStore((state)=>state.setIsLoggedIn)
    const logOut=async()=>{
                const res=  await axios.post("/user/logout")
                setIsLoggedIn(false)
                console.log("set logedin false")
                if(res.data.statusCode) navigate("/login" ,{replace:true})    
        }
    return (
        <div className="w-full h-full flex "> 
            <div className="flex w-1/6  h-full  items-center ml-8">
                <div className=" hover:bg-gray-600 rounded-full p-2 cursor-pointer">
                    <img className="h-[25px] " src="icons/hamburger.svg" alt="" />
                </div>          
                <div onClick={()=>navigate("/")} className="flex gap-3 hover:cursor-pointer">
                    <img  className="min-h-[1rem] h-[1.5rem]" src="icons/Youtube-Logo.svg" alt="" />
                </div>
            </div>
            <div className="flex items-center h-full w-3/6 justify-center">
                <div className="rounded-l-2xl flex items-center  w-[75%] h-[60%] rounded-r-2xl bg-[#2A2A2A]">
                    <div className="w-[90%] flex items-center h-[90%]  overflow-auto">
                        <input className="bg-[#1a1a1a]  outline-0 caret-white pl-5 w-[100%] text-white h-[100%] rounded-l-2xl ml-[3px]" placeholder="search" type="text" />
                    </div>
                    <div className="h-full w-[10%] flex items-center justify-center rounded-r-2xl">
                        <img className="h-[30px] cursor-pointer" src="icons/search.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex w-2/6 items-center justify-end mr-10 gap-3">
               <p onClick={logOut} className="text-white font-bold bg-red-600 rounded-3xl px-3 py-2">logout</p>
                <UploadFiles/>
                <img  className="h-[40px] w-[30px] cursor-pointer" src="icons/notifications.svg" alt="" />
                <img onClick={()=>navigate("/profile")} className="h-[40px] hover:cursor-pointer w-[40px] rounded-full" src={user.avatar} alt="" />
            </div>
        </div>
    )
}