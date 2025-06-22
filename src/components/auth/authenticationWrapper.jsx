import { Navigate } from "react-router-dom"
import { userStore } from "../../userStore/user.Store"
import { useEffect, useState } from "react"
export default function Authentication({children})
{
    const isLoggedIn =userStore((state)=>state.isLoggedIn)
    const authenticate =userStore((state)=>state.authenticate)
    const [isloading,setIsloading]=useState(true)   
        useEffect(()=>{
            async function auth(){
                await authenticate()
                setIsloading(false)
            }
            auth()
        },[])

    if(isloading)return <div>loading..</div>        
    if(!isLoggedIn) return <Navigate to={"/login"} replace/>
    return(<>
          {children}
    </>   
    )
}