import {z} from 'zod'

export const loginSchema =z.object({
username:z.string().min(4).max(15),
password:z.string().min(4,"minimum 4 characters"),
})