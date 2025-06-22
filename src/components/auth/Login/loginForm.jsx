import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {loginSchema} from './loginSchema.js'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Button} from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import {  useEffect, useState } from 'react'
import {loginUser} from './login.js'
import {  useNavigate } from 'react-router-dom'
import { userStore } from '../../../userStore/user.Store.jsx'
export default function LoginForm(){

    const setIsLoggedIn= userStore((state)=>state.setIsLoggedIn)
    const isLoggedIn =userStore((state)=>state.isLoggedIn)
    const navigate =useNavigate()
    const [response,setresponse] = useState("")
    const [isSubmited,setisSubmited]= useState(false)

    const form = useForm({
        resolver:zodResolver(loginSchema),
        defaultValues:{
            username:"",
            password:""
        }
    })

   async function onSubmit(values)
    {
        setisSubmited(true)
        setresponse( (await loginUser({
        "username":values.username,
        "password" :values.password
       })))
    }
    
    useEffect(()=>{
        if(response.status=== 200)
            {
               setIsLoggedIn(true)
                navigate("/")
            }
    },[response])
    return(
        <div className='flex flex-col items-center'>
            <p className='text-white font-bold text-4xl mb-4'>Login</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
                    <FormField 
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white text-md">username</FormLabel>
                            <FormControl>
                                <Input  className="bg-amber-50 font-bold caret-black" placeholder="enter your username" {...field} />
                            </FormControl>
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
                                {
                                    <p className='text-red-600'>
                                        {response.status?null:response}
                                    </p>
                                }
                                <FormMessage />
                            </FormItem>
                    )}
                    />
                    {
                        isLoggedIn
                        ?<Button className ="hover:scale-[113%] hover:bg-slate-800 text-green-500">Loged in sucessfully</Button>
                        :(isSubmited
                        ?<Button className ="hover:scale-[113%] hover:bg-slate-800" type="submit">please wait ....</Button>
                        :<Button className ="hover:scale-[113%] hover:bg-slate-800" type="submit">Login</Button>)
                    }
               </form>
                <button  onClick={()=>navigate("/signup")} className='text-white m-4 hover:cursor-pointer  font-light'>SignUp ?</button>
            </Form>
        </div>
    )
}