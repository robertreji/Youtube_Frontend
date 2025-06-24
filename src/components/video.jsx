import { useState } from "react"
import { useNavigate} from 'react-router-dom'


export const Video = ({thumbnail,views,title,description,avatar,videoFile,vid})=>{
    const [isHover,setisHover]= useState(false)
    const navigate = useNavigate()
    function onClick()
    {
        navigate(`/videos/vid/${vid}`)
    }
    return(
        <div onClick={onClick} className="min-w-[300px] hover:bg-[#1b1a1a] max-w-[300px] min-h-[300px] max-h-[300px] rounded-2xl ">
            <div  onMouseLeave={()=>setisHover(false)} onMouseEnter={()=>setisHover(true)} className="h-[65%] w-full object-center  rounded-2xl ">
               {
                isHover
                ?<video autoPlay class="w-full object-center object-fill h-full rounded-2xl">
                    <source  src={videoFile} type="video/mp4" />
                </video>
                :<img  class="w-full object-center object-fill h-full rounded-2xl" src={thumbnail} />
               }
               {
                console.log("veeedio id",vid)
               }
            </div>
            <div className="w-full flex h-[35%] ">
                <div className="w-[50px] pt-4 h-full text-white flex gap-4">
                    <img className="rounded-full  object-center h-[45px] w-[45px]" src={avatar} alt="img" />
                </div>
                <div className="h-full gap-1 flex flex-col flex-1 pt-4 pl-4">
                    <div className="h-auto w-full text-white font-bold text-lg">
                    <p>{title}</p>
                    </div>
                    <div className="h-auto w-full font-light text-white ">
                    <i> {description}</i>
                   </div>
                    <div className="h-auto w-full font-light text-white ">
                    <p> {views}  views . 5 days</p>
                   </div>
                </div>
            </div>
        </div>
    )
}