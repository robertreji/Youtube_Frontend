import axios from '../../components/axios'


export default async function uploadVideo(fileData)
{
  try{
   const res= await axios.post("user/uploadVideo",
    fileData,
    {withCredentials:true})
    console.log("responsee :",res.response)
  }
  catch(err)
  {
    console.log(err)
  }
}