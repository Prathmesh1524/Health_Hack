import z from "zod"

export const signupInputs = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})


export const signinInputs = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})


// IF SHOWS ERROR THEN ADD NAME AS WEELL
export const creatBlogInput = z.object({
    title: z.string(),
    content: z.string()
})


export const updateBlogInput = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string()
})

export const diseaseDetails= z.object({
    title:z.string(),
    age:z.number(),
    symptomdays:z.number()
})


export type  diseaseDetailsType= z.infer<typeof diseaseDetails>
export type SignupInputs = z.infer<typeof signupInputs>
export type SigninInputs = z.infer<typeof signinInputs>
export type CreatBlogInput = z.infer<typeof creatBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>