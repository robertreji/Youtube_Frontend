import { useState } from "react"


export const VideoPage = ({thumbnail,views,title,description,videoFile})=>{
    const [isHover,setisHover]= useState(false)
    return(
        <div className="flex  justify-center hover:bg-[#1b1a1a] items-center">
           
            <div onMouseLeave={()=>setisHover(false)} onMouseEnter={()=>setisHover(true)} >
               {
                isHover
                ?<video autoPlay class="w-[100px] object-center object-fill h-full rounded-md">
                    <source  src={videoFile} type="video/mp4" />
                </video>
                :<img  class="w-[100px]  object-center object-fill  rounded-2xl" src={thumbnail} />
               }
            </div>
            <div className="h-[100px]  text-start justify-stretch flex gap-1 w-[50%] flex-col   flex-1 pt-4 pl-4">
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
    )
}