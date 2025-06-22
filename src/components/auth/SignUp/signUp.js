import axios from 'axios'

export const signUpUser =async(user)=>{
    try{
const res=await axios.post("http://localhost:3000/api/v1/user/signUp", user);  
console.log(res)
return res
    }catch(err)
    {
        console.log(err.response.data)
        return err.response.data.message
    }
}

export const checkUserName =async(username)=>{
    try{
        const res=await axios.post("http://localhost:3000/api/v1/user/isUserNameAvailable", username);  
        return(res.data.data)
    }catch(err)
    {
        console.log(err.response.data)
        return err.response.data.message
    }
}