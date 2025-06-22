import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { uploadVideoSchema } from './uploadVideoSchema';
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
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/react";
import uploadVideo from './uploadVideo';

export default function UploadFiles() {



  const form = useForm({
    resolver:zodResolver(uploadVideoSchema),
      defaultValues:{
        title:"",
        description:""
          }
      })

  async function onSubmit(values)
    {
      const formData = new FormData()
      formData.append("title",values.title)
      formData.append("description",values.description)
      formData.append("video",values.video)
      formData.append("thumbnail",values.thumbnail)

      await uploadVideo(formData)
    }
          
    
  return (
    <Popover placement="bottom-end" className="w-[500px] h-[800px] bg-black rounded-2xl" showArrow={true}>
      <PopoverTrigger>
        <button>
          <img onClick={()=>console.log(true)} className="h-[34px] hover:cursor-pointer" src="icons/uploadVideo.svg" alt="" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full h-full">
        <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
              <FormField 
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">upload Thumbnail</FormLabel>
                  <FormControl>
                    <Input id="thumbnail" type="file" className="text-white" 
                    onChange={(e)=>{
                      const file = e.target.files?.[0]
                      if(file) field.onChange(file)
                    }}
                  ref={field.ref} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="video"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">upload video </FormLabel>
                  <FormControl>
                    <Input id="thumbnail" type="file" className="text-white" 
                    onChange={(e)=>{
                      const file = e.target.files?.[0]
                      if(file) field.onChange(file)
                    }}
                  ref={field.ref} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField 
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">title</FormLabel>
                  <FormControl>
                    <Input className="text-white" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField 
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">discription</FormLabel>
                  <FormControl>
                    <Input className="text-white" placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className ="hover:scale-[113%] hover:bg-slate-800" type="submit">Submit</Button>         
          </form>
        </Form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
