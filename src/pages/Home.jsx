import {  useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from '../components/axios.js'
import { userStore } from "../userStore/user.Store.jsx"
import { Video } from "../components/video.jsx"
export default function Home()
{
    const navigate= useNavigate()
    const setIsLoggedIn = userStore((state)=>state.setIsLoggedIn)
    const setUser= userStore((state)=>state.setUser)
    const [videos,setvideos]= useState([])
    const logOut=async()=>{
            const res=  await axios.post("/user/logout")
            setIsLoggedIn(false)
            console.log("set logedin false")
            if(res.data.statusCode) navigate("/login" ,{replace:true})    
    }
    useEffect(()=>{
        const userdetails=async ()=>
            {
             try{
                const user= await axios.post(
                   "user/currentUserdetails",
                   {},
                   {withCredentials:true}
               )
            setUser(user.data.data)
               const videos= await axios.get(
                   "user/getAllvideos",
                   {},
                   {withCredentials:true}
               )
               setvideos(videos.data.data)
               }
             catch (error) {
                console.log(error)
             }
            }
 userdetails();         
        },[])
    return(
        <>
        <p onClick={logOut} className="text-white">logout</p>
        <div className="grid-cols-4 grid w-[85%] gap-2  rounded-2xl scrollbar-hide h-[100%]  overflow-y-auto">
            {
                videos
                ?videos.map((video)=>{
                    console.log("video :",video)
                        return<Video key={video._id}
                                            vid={video._id}
                                            thumbnail={video.thumbnail}
                                            avatar={video.user[0].avatar}
                                            description={video.description}
                                            title={video.title}
                                            views={video.views}
                                            videoFile={video.videoFile}/>
                
                    })
                :null
            }
        </div> 
        </>
    )
}