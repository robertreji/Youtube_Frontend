import { useEffect, useState } from "react"
import { userStore } from "../userStore/user.Store"
import axios from "../components/axios"
import { Video } from "../components/video"

export default function ProfilePageHome()
{
    const user = userStore((state)=>state.user)
    const [watchHistory,setWatchHistory] = useState([])
    const [userVideoDetails,setuserVideoDetails]=useState([])
    useEffect(()=>{
        async function getVideos(){
            const res = await axios.post("user/userVideos",{},{withCredentials:true})
            setuserVideoDetails(res.data.data[0].userVideos)
            const WatchHistory = await axios.post("user/getUserWatchHistory",{},{withCredentials:true})
            setWatchHistory(WatchHistory.data.data.watchHistory[0].watchHistoryVideos)
            console.log("user WatchHistory",WatchHistory.data.data.watchHistory[0].watchHistoryVideos)
           }

        getVideos()
    },[])
    return(
        <>
        <div className=" w-full overflow-hidden h-[50%] ml-2 ">
                            <div className="w-full  h-[12%]">
                                    <b className="text-2xl text-white">History</b>
                            </div>
                            <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide flex gap-3 h-[88%] ">
                             {
                                watchHistory
                                ?watchHistory.map((video,index)=>(
                                <Video key={index}
                                            thumbnail={video.thumbnail}
                                            avatar={video.ownerDetails.avatar}
                                            description={video.description}
                                            title={video.title}
                                            views={video.views}
                                            videoFile={video.videoFile}/>
                                ))
                                :null

                             }
                            
                            </div>
                    </div>
                    <div className=" w-full h-[50%] ml-2 mt-6">
                        <div className="w-full  h-[12%]">
                                    <b className="text-2xl text-white">Playlist</b>
                            </div>
                            <div className="w-full h-[88%] flex gap-2 scrollbar-hide overflow-y-hidden  overflow-x-auto">
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
                    <div className=" w-full overflow-hidden h-[50%] ml-2 ">
                            <div className="w-full  h-[12%]">
                                    <b className="text-2xl text-white">History</b>
                            </div>
                            <div className="w-full overflow-x-auto scrollbar-hide flex gap-3 h-[88%] ">
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
                    <div className=" w-full overflow-hidden h-[50%] ml-2 ">
                            <div className="w-full  h-[12%]">
                                    <b className="text-2xl text-white">History</b>
                            </div>
                            <div className="w-full overflow-x-auto scrollbar-hide flex gap-3 h-[88%] ">
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