import { PrismaClient } from "@prisma/client/extension"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Hono } from "hono"
import z from "zod"
import { diseaseDetails } from "../zod"

export const DiseaseRouter = new Hono<{
    Bindings:{

        DATABASE_URL: string,  
        JWT_SECRETS: string
    }
}>


DiseaseRouter.post("/decise_info",async  (c)=>{
    
    const body= await c.req.json();
    const {success} = diseaseDetails.safeParse(body);
    if(!success){
        c.status(411);
        return c.text("Invalid Inputs")
    }

 const prisma = new PrismaClient({
              //@ts-ignore
              datasourceUrl: c.env?.DATABASE_URL,
            }).$extends(withAccelerate());
try{

    const disease =await prisma.disease.create({
        data:{
            title :body.title,
            age :body.age,
            totaldays: body.symptomdays
        }
    })  
}catch(e){
    console.log(e)
c.status(411);
    return c.text("Maybe Backend is down. Try again or Later!!!")
}
    return c.text("Disease Info")
})