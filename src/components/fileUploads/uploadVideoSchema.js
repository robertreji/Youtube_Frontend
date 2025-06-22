import {z} from 'zod'

export const uploadVideoSchema =z.object({
title:z.string().min(1).max(15),
description:z.string().min(4,"minimum 4 characters"),
thumbnail:z.instanceof(File),
video:z.instanceof(File)
})