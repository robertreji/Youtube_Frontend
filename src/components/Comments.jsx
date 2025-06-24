

export default function Comments({avatar,username})
{
    return(
        <div className="w-full h-[100px] mt-3 pl-8 flex items-center gap-4 text-amber-50 ">
            <div>
                <img className="w-[40px] h-[40px] rounded-full" src={avatar} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-semibold ">{username}</p>
                <p className="font-thin">Comments goes here....</p>
            </div>
        </div>
    )
}