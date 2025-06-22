import {z} from 'zod'

export const SignUpSchema =z.object({
username:z.string().min(4).max(15),
password:z.string().min(4,"minimum 4 characters"),
avatar:z.instanceof(File).optional()
})