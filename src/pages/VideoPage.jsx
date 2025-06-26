import {  useEffect, useRef } from "react"
import axios from '../components/axios.js'
import Comments from "../components/Comments.jsx"
import { VideoPage } from "../components/videoVideoPage.jsx"
import { useState } from "react"
import { useParams } from "react-router-dom"
export default function Video()
{
    const CommentRef=useRef()
    const [hoverTimeout,sethoverTimeout] = useState(null)
    const [vDetails,setVdetails] =useState({})
    const [ownerD,setownerD]= useState({})
    const [isvideoLoaded,setvideoLoaded] =useState(false)
    const [uservideos,setuserVideoDetails] = useState([])
    const [issubscribed,setSubscribed] = useState(false)
    const [subcount,setSubCount]= useState(0)
    const [totalLikes,setTotalLikes] = useState(0)
    const [isLiked,setIsLiked] =useState(false)
    const {id} =useParams()
    const [comments,setComments]= useState([])

    useEffect(()=>{
        const videodetails=async ()=>
            {
             try{
               
                const details= await axios.post("user/getVideoDetails",{videoId:id},{withCredentials:true})
                setVdetails(details.data.data[0])
                setownerD(details.data.data[0].ownerDetails[0])
                setvideoLoaded(true)
               }
             catch (error) {
                console.log(error)
             }
            }
            videodetails();         
        },[id])
        useEffect(()=>{
            if (ownerD._id){
            async function getVideos()
            {
                const res = await axios.post("user/getMoreVideosFromChannel",{userId:ownerD._id},{withCredentials:true})
                setuserVideoDetails(res.data.data[0].userVideos)
                getAllComments()
            }

            getVideos()}
        },[ownerD._id])
        async function totalLikeS() {
             const TLikes = await axios.post("user/totalLikes",{videoId:vDetails._id},{withCredentials:true})
            setTotalLikes(TLikes.data.data.totalLikes.length)
        }
        async function subscriptiondetails()
            {
                try {
                    const subCount = await axios.post("user/getSubscriberCount",{channelId:ownerD._id},{withCredentials:true})
                    setSubCount(subCount.data.data?.totalSubscribers)
                    const subscribed = await axios.post("user/isSubscribed",{channelId:ownerD._id},{withCredentials:true})
                    setSubscribed(subscribed.data.data?.isSubscribed)
                    const LIKED = await axios.post("user/islikeVideo",{videoId:vDetails._id},{withCredentials:true})
                    setIsLiked(LIKED.data.data?.isLiked)
                    totalLikeS()
                } catch (error) {
                    console.log(error)
                }
            }
        useEffect(()=>{
         subscriptiondetails()
        })
        async function subscribe()
        {
             axios.post(
                   "user/subscribeToChannel",
                   {channelId:ownerD._id},
                   {withCredentials:true}
               )
            setSubscribed(true)
           await subscriptiondetails()
        }
        async function likeVideo()
        {
            await axios.post(
                   "user/likeVideo",
                   {videoId:vDetails._id},
                   {withCredentials:true}
               )
            await subscriptiondetails()
            setIsLiked(true)
            totalLikeS()
        }
          async function unlikeVideo()
        {
            await axios.post(
                   "user/unlikeVideo",
                   {videoId:vDetails._id},
                   {withCredentials:true}
               )
            await subscriptiondetails()
            setIsLiked(false)
            totalLikeS()
        }
        async function unsubscribe()
        {
             await axios.post(
                   "user/unsubscribeToChannel",
                   {channelId:ownerD?._id},
                   {withCredentials:true}
               )
            setSubscribed(false)
            await subscriptiondetails()
        }

   
        async function getAllComments(){
            const comments= await axios.post(
                   "user/getAllComments",
                   {videoId:vDetails?._id},
                   {withCredentials:true}
               )
            setComments(comments.data.data.Comments[0].comment)
        }

        async function commentTovideo(){
            const Comment = CommentRef.current.value
            
             await axios.post(
                   "user/comment",
                   {videoId:vDetails?._id,comment:Comment},
                   {withCredentials:true}
               )
            getAllComments()
        }
        async function  updateWatchHistory()
            {
                const timeout = setTimeout(async()=>{
                     if(vDetails._id)
                     {
                        await axios.post(
                           "user/updateWatchHistory",
                           {videoId:vDetails._id},
                           {withCredentials:true}
                       )
                       console.log("updated watch history...")
                     }
                },100)
                sethoverTimeout(timeout)
            }
            function handleMOuseLeave(){
                clearTimeout(hoverTimeout)
            }


    return(
        <>
        <div onMouseLeave={handleMOuseLeave} onMouseEnter={updateWatchHistory} className="flex w-[85%] rounded-2xl scrollbar-hide h-[100%]  overflow-y-auto">
            <div className="w-[1000px] rounded-2xl   h-auto">
                <div className="h-[65%] w-full object-center  rounded-2xl ">
                   {
                    isvideoLoaded
                    ? <video controls  className="w-full object-center object-fill h-full rounded-2xl">
                        <source  src={vDetails.videoFile} type="video/mp4" />
                    </video>
                    :null
                   }
                 </div>
                <div className="w-[1000px] pl-5 pt-4  h-[95px] text-white">
                    <div className="w-auto max-w-[379] font-serif font-semibold text-2xl h-auto max-h-[29px]">{vDetails.title}</div>
                    <div className="w-[1000px] mt-3 h-[40px] flex justify-between">
                        <div className="w-auto flex gap-4 font-thin max-w-[270px] h-auto max-h-[40px]">
                            {vDetails.views} <p>views</p>
                        </div>
                    </div>
                </div>
                <hr  className="w-full bg-gray-50 opacity-15 h-[1px] "/>
                <div className=" w-[1000px] flex justify-between items-center pl-5  h-[166px]">
                    <div className="max-w-[100%] text-white min-h-[100px] max-h-[51px] h-auto w-auto ">
                        <div className=" max-w-[700px] gap-4 flex items-center min-h-[100px] max-h-[51px] w-auto h-auto">
                            <div className="w-[80px] h-[80px]">
                                <img className="rounded-full w-[80px] h-[80px]" src={ownerD.avatar} alt="" />
                            </div>
                           <div>
                            <p className="text-white text-2xl font-bold">{ownerD.username}</p>
                            <p className=" text-lg font-thin text-gray-200">{subcount} Subscribers</p>
                           </div>
                            {issubscribed
                            ?<div onClick={unsubscribe} className="bg-red-300 w-[100px] h-[30px] flex items-center justify-center rounded-2xl text-white font-bold ">unSubscribe</div>
                            :<div onClick={subscribe} className="bg-red-600 w-[100px] h-[30px] flex items-center justify-center rounded-2xl text-white font-bold ">Subscribe</div>
                            }
                        </div>
                    </div>
                    <div className="max-w-[374px] text-white mr-10 flex gap-[20px] max-h-[45px]  w-auto h-auto">
                        <div  className="max-w-[75px]  flex items-center max-h-[45px] w-auto h-auto">
                            {
                                isLiked
                                ?<div onClick={unlikeVideo} className="w-[36px]   flex justify-center items-center h-[36px]">
                                    <img  src="/icons/likeD.svg" alt="like" />
                                </div>
                                : <div onClick={likeVideo} className="w-[36px]   flex justify-center items-center h-[36px]">
                                    <img  src="/icons/liked.svg" alt="like" />
                                </div>
                            }
                           
                            <div className="w-[39px]  flex justify-center items-center h-[36px]">{totalLikes}</div>
                        </div>
                        <div className="max-w-[87px] gap-[10px]  flex items-center w-auto max-h-[45px] h-auto">
                            <div className="max-w-[36px] max-h-[36px] w-auto h-auto ">
                                <img src="/icons/share.svg" alt="" />
                            </div>
                            <div className="max-w-[51px] max-h-[40px] w-auto h-auto">
                                    SHARE
                            </div>
                        </div>
                        <div className="max-w-[77px] gap-[10px]  flex items-center max-h-[45px] w-auto h-auto">
                            <div className="max-w-[36px] max-h-[36px] w-auto h-auto">
                                <img src="/icons/Save.svg" alt="" />
                            </div>
                            <div className="max-w-[41px] max-h-[36px] w-auto h-auto">
                                    Save
                            </div>
                        </div>
                    </div>
                </div>
                <hr  className="w-full bg-gray-50 opacity-15 h-[1px] "/>
                <div className="w-auto pl-5 max-w-[1000px] h-auto max-h-[144px] mt-2">
                    <div className="w-[226px] flex gap-3 h-[34px]">
                        <p className="font-bold text-xl text-white">266 Comments</p>
                        <button onClick={commentTovideo} className="bg-green-500 px-3 text-white py-1 rounded-2xl inline">submit</button>
                    </div>
                    <div className="w-[1000px] items-center   mt-4 flex gap-4 h-[60px] ">
                        <div>
                            <img className="h-[35px] w-[35px] rounded-full" src={ownerD.avatar} alt="" />
                        </div>
                        <div className="w-full h-auto text-wrap">
                            <div className="w-full h-full">
                                <input ref={CommentRef} className="text-white text-wrap outline-0 w-[70%] caret-white" type="text" placeholder="add a public comment ..."></input>
                            </div>
                            <hr  className="w-full bg-gray-50 opacity-15 h-[1px] "/>
                        </div>
                    </div>
                </div>
                <hr  className="w-full bg-gray-50 opacity-15 h-[1px] "/>
                
               {
                comments.map((comment)=>(
                    <Comments avatar={comment.ownerDetails.avatar} username={comment.ownerDetails.username} Comment={comment.content} />
                ))
               }
            </div>
        </div>
        <div className="w-[520px] scrollbar-hide  rounded-2xl min-h-[300px]">
            <div className="w-full flex justify-start items-center h-[5%] mb-3 rounded-t-2xl">
                <b className="text-white text-lg bg-[#1b1a1a] py-2 px-6 rounded-2xl">from  {ownerD.username}</b>
            </div>
            <div className="w-full h-[90%] overflow-y-auto scrollbar-hide">
                <div className="w-full min-h-[500px]"> 
                    {
                        uservideos?uservideos.map((video)=>(
                            <VideoPage key={video._id}
                                thumbnail={video.thumbnail}
                                avatar={video.avatar}
                                description={video.description}
                                title={video.description}
                                views={0}
                                videoFile={video.videoFile}
                            /> 
                        ))
                        :null
                    }          
                </div>
            </div>
           
        </div>
        </>
    )
}