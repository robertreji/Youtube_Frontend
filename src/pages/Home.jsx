import {  useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from '../components/axios.js'
import { userStore } from "../userStore/user.Store.jsx"
export default function Home()
{
    const navigate= useNavigate()
    const setIsLoggedIn = userStore((state)=>state.setIsLoggedIn)
    const setUser= userStore((state)=>state.setUser)
    const logOut=async()=>{
            const res=  await axios.post("/user/logout")
            setIsLoggedIn(false)
            console.log("set logedin false")
            if(res.data.statusCode) navigate("/login" ,{replace:true})    
    }
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
               }
             catch (error) {
                console.log(error)
             }
            }
 userdetails();         
        },[])
    return(
        <div className="flex w-[85%]  items-center justify-center h-[100%] rounded-xl  overflow-auto">
            <button onClick={logOut }className="bg-green-50 p-4 rounded-xl w-40 h-40 text-red-500">LOgout</button>
        </div>
    )
}