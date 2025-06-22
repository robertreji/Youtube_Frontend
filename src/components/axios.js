import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000/api/v1/",
    withCredentials:true
})
axiosInstance.interceptors.response.use(
    (response)=>response,
    async (err)=>{
        const orgininalReq = err.config
        if(err.response?.status===401 && !orgininalReq._retry)
        {
            console.log("error is 401 trying to refresh tokens....")
            orgininalReq._retry=true
                try{
                        await axiosInstance.post("user/refreshToken",{},{
                            withCredentials:true
                        })
                    return axiosInstance(orgininalReq)
                }
                catch(refresherror)
                {
                    window.location.href = "/login";
                    console.log("cateched error")
                    return Promise.reject(refresherror)
                }
            }
        
        return Promise.reject(err)
    }
)
export default axiosInstance
