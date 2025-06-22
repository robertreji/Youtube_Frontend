import { useNavigate } from "react-router-dom"


export default function SideBar()
{
    const navigate= useNavigate()
    return (
        <div className="scrollbar-hide w-[15%] h-[100%] rounded-xl pl-5 overflow-x-hidden overflow-y-auto">
            <div className="text-white w-full flex-col h-1/5 ml-5 flex">
                <div onClick={()=>navigate("/")} className="w-[90%]  pl-1 h-1/3 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[25px]" src="icons/home-fill.svg" alt="" />
                    <b>Home</b>
                </div>
                <div className="w-[90%]  pl-1 h-1/3 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[25px] cursor-pointer" src="icons/explore.svg" alt="" />
                    <b>Explore</b>
                </div>
                <div className="w-[90%]  pl-1 h-1/3 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[25px]" src="icons/subscriptions.svg" alt="" />
                    <b>Subscriptions</b>
                </div>
            </div>
            <hr  className="w-[82%] mt-3 ml-5 bg-white opacity-40"/>
            <div className="text-white gap-2 w-full flex-col h-2/5 ml-5 flex mt-3">
                <div className="w-[80%] hover:cursor-pointer  rounded-2xl bg-[#303030]  h-1/6 flex pl-5  justify-between items-center gap-2 ">
                    <pre className="text-lg">You <b className="text-2xl font-light"></b></pre>
                </div>
                <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[25px]" 
                    src="icons/playlist.svg" alt="" />
                    <b>Playlist</b>
                </div>
                <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[20px]"
                     src="icons/yourVideos.svg" alt="" />
                    <b>your videos</b>
                </div>
                <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[25px]" 
                    src="icons/history.svg" alt="" />
                    <b>History</b>
                </div>
                <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[25px]"
                     src="icons/watchLater.svg" alt="" />
                    <b>watch later</b>
                </div>
                 <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[20px]"
                     src="icons/liked-fill.svg" alt="" />
                    <b>liked videos</b>
                </div>
            </div>
            <hr  className="w-[82%] mt-3 mb-3 ml-5 bg-white opacity-40"/>
           <div className="text-white w-full flex-col h-2/5 ml-5 flex mt-3">
           <b className="text-[#AAAAAA]">Subscriptions</b>
                <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[30px] w-[30px] rounded-full"
                     src="https://yt3.googleusercontent.com/8eItmjbOfJwot8wd0-19KgtvF2ztf4np2qIVfJ1kMPv1ADi6wx9giU62B1j6xO0Ug2Idrqbncg=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <b>asianet news</b>
                </div>
                <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[30px] w-[30px] rounded-full"
                     src="https://yt3.googleusercontent.com/ytc/AIdro_nUOxU8hkewGl8l7nLLgw0tPbSXWqD_EwjP71g3avXVVMQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <b>getsetfly</b>
                </div>
                <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[30px] w-[30px] rounded-full"
                     src="https://yt3.googleusercontent.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s900-c-k-c0x00ffffff-no-rj" alt="" />
                    <b>freecode Camp</b>
                </div>
                <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[30px] w-[30px] rounded-full"
                     src="https://i0.wp.com/moneysimplified.in/wp-content/uploads/2024/07/Heres-What-Mutual-Fund-Folio-Data-Reveals-About-Investor-Behaviour.jpg?fit=767%2C476&ssl=1" alt="" />
                    <b>shareeq shamshudin</b>
                </div>
                 <div className="w-[90%]  pl-1 h-1/6 flex rounded-full items-center gap-2 hover:bg-[#303030] cursor-pointer ">
                    <img className="h-[30px] w-[30px] rounded-full"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3f_NUZcdqrgODi1r9nfrlXAkFYvEDGY_s2g&s" alt="" />
                    <b>cartoon network</b>
                </div>
            </div>    
             <hr  className="w-[82%] ml-5 bg-white opacity-40"/>        
            <div className="w-full h-2/5 flex"></div>
        </div>
    )
}