import {  useEffect, useState } from "react"
import axios from '../components/axios.js'
import { userStore } from "../userStore/user.Store.jsx"
import { Video } from "../components/video.jsx"
export default function Home()
{
  
    const setUser= userStore((state)=>state.setUser)
    const [videos,setvideos]= useState([])
    
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
        
        <div className="grid-cols-4 grid w-[85%] gap-2  rounded-2xl scrollbar-hide h-[100%]  overflow-y-auto">
            {
                videos
                ?videos.map((video)=>{
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