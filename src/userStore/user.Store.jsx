import {create} from 'zustand'
import axios from '../components/axios'

export const userStore = create((set)=>(
    {
        user:"",
        setUser :(userData)=>set({user:userData}),

        isLoggedIn:false, 
        setIsLoggedIn :(val)=>set({isLoggedIn:val}),

        authenticate:async ()=>
        {
            
            try{
                const res= await axios.get("user/verifyUser",{withCredentials:true})
                if(res.data.data.userVerified ===true)
                    {
                        set({isLoggedIn:true})
                    }
                }catch(err)
                {
                    set({isLoggedIn:false})
                    console.log(err)
                    console.log("user is not  verified....")
                }finally{
                    console.log("authenticaton completed ...")
            }
        }
       
    }
))