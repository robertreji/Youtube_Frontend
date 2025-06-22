import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import  {SignUpSchema} from './signUpSchema.js'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Button} from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { useEffect, useState } from 'react'
import { signUpUser,checkUserName } from './signUp.js'
import { useNavigate } from 'react-router-dom'

export default function SignUpForm(){
    const Navigate = useNavigate()
    const [avatar,setavatar] =useState(null)
    const [avatarPreview,setavatarPreview]=useState(null)
    const [response,setresponse] = useState({})
    const [isUserNameAvailableToUse,setisUserNameAvailableToUse ] =useState()
    const [isSignedUp,setisSignedUp]=useState(false)
    const [userNameEntered,setuserNameEntered]= useState(false)
    const form = useForm({
        resolver:zodResolver(SignUpSchema),
        defaultValues:{
            username:"",
            password:""
        }
    })
    const [isSubmited,setisSubmited]= useState(false)
   async function onSubmit(values)
    {
        setisSubmited(true)
        const formData = new FormData();
        formData.append("username",values.username)
        formData.append("password",values.password)
        formData.append("avatar",avatar)
       setresponse( (await signUpUser(formData)))
    }
    
   async function checkUsername(e)
    {
       setisSubmited(false)
       setisSignedUp(false)
       setisUserNameAvailableToUse(await checkUserName({"username":e.target.value}))
       if(e.target.value==="")
       {
            setuserNameEntered(false)
            return
       }
       setuserNameEntered(true)
       
    }
    useEffect(()=>{
        if(response.status=== 200)
            {
                setisSignedUp(true)
                Navigate("/")
            }
    },[response])
    return(
        <div className='flex flex-col items-center'>
            <p className='text-4xl text-white font-semibold m-4'>SignUp</p>
            <div className='relative rounded-full h-[100px] flex items-center justify-center w-[100px] bg-white'>
               {avatarPreview
               ? <img className='rounded-full  object-center object-fill h-[100px] w-[100px]' src={avatarPreview} alt="" />
               :
                <>
                <label className=' absolute flex items-center text-[10px] justify-center rounded-full w-full h-full font-semibold '>upload avatar </label>
               <input className='h-full   w-full opacity-0 ' 
                    onChange={(e)=>{
                        const file=e.target.files[0]
                        setavatarPreview(URL.createObjectURL(file))
                        setavatar(file)
                    } }
                    type="file"  accept="image/*"/>
                </>
               }
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
                    <FormField 
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-md">username</FormLabel>
                            <FormControl>
                                <Input  className="bg-amber-50 font-bold caret-black" placeholder="enter your username" {...field}
                                onChange={(e)=>{
                                    field.onChange(e)
                                    checkUsername(e)
                                }} />
                            </FormControl>
                            {
                                userNameEntered
                                ?(isUserNameAvailableToUse
                                    ?<p className='text-red-600 font-semibold'>username already exists </p>
                                    :<p className='text-green-500 font-semibold'>available to use </p>
                                ):null
                                }
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white text-md">password</FormLabel>
                                <FormControl>
                                    <Input className="bg-amber-50 font-bold" placeholder="enter your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                    )}
                    />
                    {
                        isSignedUp
                        ?<Button className ="hover:scale-[113%] hover:bg-slate-800 text-green-500">signed up sucessfully</Button>
                        :(isSubmited
                        ?<Button className ="hover:scale-[113%] hover:bg-slate-800" type="submit">please wait ....</Button>
                        :<Button className ="hover:scale-[113%] hover:bg-slate-800" type="submit">Submit</Button>)
                    }
               </form>
            </Form>
             <button  onClick={()=>Navigate("/login")} className='text-white hover:cursor-pointer m-4  font-light'>login ?</button>
        </div>
    )
}