import {  useEffect } from "react"
import axios from '../components/axios.js'
import Comments from "../components/Comments.jsx"
import { VideoPage } from "../components/videoVideoPage.jsx"
import { useState } from "react"
import { useParams } from "react-router-dom"
export default function Video()
{
    const [vDetails,setVdetails] =useState({})
    const [ownerD,setownerD]= useState({})
    const [isvideoLoaded,setvideoLoaded] =useState(false)
    const [uservideos,setuserVideoDetails] = useState([])
    const {id} =useParams()
    console.log("user params :",id)
    useEffect(()=>{
        const videodetails=async ()=>
            {
             try{
                const details= await axios.post(
                   "user/getVideoDetails",
                   {videoId:id},
                   {withCredentials:true}
               )
            const res = await axios.post("user/userVideos",{},{withCredentials:true})
            setuserVideoDetails(res.data.data[0].userVideos)
                console.log("video details:",details.data.data[0])
                setVdetails(details.data.data[0])
                setownerD(details.data.data[0].ownerDetails[0])
                setvideoLoaded(true)
               }
             catch (error) {
                console.log(error)
             }
            }
            videodetails();         
        },[])
    return(
        <>
        <div className="flex w-[85%] rounded-2xl scrollbar-hide h-[100%]  overflow-y-auto">
            <div className="w-[1000px] rounded-2xl   h-auto">
                <div className="h-[65%] w-full object-center  rounded-2xl ">
                   {
                    isvideoLoaded
                    ? <video controls  class="w-full object-center object-fill h-full rounded-2xl">
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
                            <p className=" text-lg font-semibold">2.3m Subscribers</p>
                           </div>
                            <div className="bg-red-600 w-[100px] h-[30px] flex items-center justify-center rounded-2xl text-white font-bold ">Subscribe</div>
                        </div>
                    </div>
                    <div className="max-w-[374px] text-white mr-10 flex gap-[20px] max-h-[45px]  w-auto h-auto">
                        <div className="max-w-[75px]  flex items-center max-h-[45px] w-auto h-auto">
                            <div className="w-[36px]   flex justify-center items-center h-[36px]">
                                <img  src="/icons/liked.svg" alt="like" />
                            </div>
                            <div className="w-[39px]  flex justify-center items-center h-[36px]">1.7K</div>
                            </div>
                            <div className="max-w-[67px] gap-[10px]  items-center flex max-h-[45px] w-auto h-auto">
                                <div className="max-w-[36px] flex gap-[30px] items-center justify-center max-h-[36px] w-auto h-auto">
                                    <img src="/icons/disLiked.svg" alt="" />
                                </div>
                                <div className="max-w-[31px] max-h-[36px] w-auto flex  items-center">632</div>

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
                    <div className="w-[226px] h-[24px]">
                        <p className="font-bold text-xl text-white">266 Comments</p>
                    </div>
                    <div className="w-[1000px] items-center   mt-4 flex gap-4 h-[60px] ">
                        <div>
                            <img className="h-[35px] w-[35px] rounded-full" src={ownerD.avatar} alt="" />
                        </div>
                        <div className="w-full h-auto text-wrap">
                            <input className="text-white text-wrap outline-0 w-full caret-white" type="text" placeholder="add a public comment ..."></input>
                            <hr  className="w-full bg-gray-50 opacity-15 h-[1px] "/>
                        </div>
                    </div>
                </div>
                <hr  className="w-full bg-gray-50 opacity-15 h-[1px] "/>
                <Comments/>
                <Comments/>
                <Comments/>
                <Comments/>
            </div>
        </div>
        <div className="w-[520px] scrollbar-hide  rounded-2xl min-h-[300px]">
            <div className="w-full flex justify-start items-center h-[5%] mb-3 rounded-t-2xl">
                <b className="text-white text-lg bg-[#1b1a1a] py-2 px-6 rounded-2xl">from Messi</b>
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