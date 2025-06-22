import { useEffect, useState } from "react"
import { userStore } from "../userStore/user.Store"
import axios from "../components/axios"
import { Video } from "../components/video"

export default function ProfilePageUserVideos()
{
    const user = userStore((state)=>state.user)
    const [userVideoDetails,setuserVideoDetails]=useState([])
    useEffect(()=>{
        async function getVideos(){
            const res = await axios.post("user/userVideos",{},{withCredentials:true})
            setuserVideoDetails(res.data.data[0].userVideos)
            console.log(res.data.data[0].userVideos)
           }
        getVideos()
    },[])
    return(
        <>
        <div className=" w-full overflow-hidden h-[88%] ml-2 ">
                            <div className="w-full  h-[12%]">
                                    <b className="text-2xl text-white">Your videos</b>
                            </div>
                            <div className="w-full overflow-y-auto overflow-x-hidden scrollbar-hide grid  grid-cols-4 gap-3 h-[88%] ">
                            {
                                userVideoDetails
                                ?userVideoDetails.map((video,index)=>(
                                    <Video key={index}
                                            thumbnail={video.thumbnail}
                                            avatar={user.avatar}
                                            description={video.description}
                                            title={video.title}
                                            views={video.views}
                                            videoFile={video.videoFile}/>))
                                :null
                            }
                            </div>
                    </div>
        </>
    )
}