import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from "hono";
import { sign, verify } from 'hono/jwt'
import { signinInputs, signupInputs, } from '../zod';


 export const userRouter =new Hono<{
    Bindings:{
        DATABASE_URL:String    
        JWT_SECRETS :String
    }
}>();


userRouter.get("/",(c)=>{
  return c.text("Hello World")
})

// SIGNUP ROUTE DONE
  userRouter.post('/signup', async (c) => {
            const prisma = new PrismaClient({
              //@ts-ignore
              datasourceUrl: c.env?.DATABASE_URL,
            }).$extends(withAccelerate());
            const body = await c.req.json();

        //ZOD VALIDTION THAT USER SEND THE CORRECT CRED
            const {success} = signupInputs.safeParse(body)
          
            if(!success){
              c.status(411)
              return c.json({
              
                msg:"Invalid Inputs"
              })
            }

            try {
              const user = await prisma.user.create({
                data: {
                  email: body.email,
                  password: body.password
                }
              });
            // @ts-ignore
              const jwt = await sign({ id: user.id }, c.env.JWT_SECRETS);
              return c.json({ jwt });
            } catch (e) {
              c.status(403);
              console.log(e);
              
              return c.json({ error: "error while signing up" });
            }
    })
  
  // SIGNIN ROUTE DONE 
  userRouter.post("/signin", async (c) => {
        const prisma = new PrismaClient({
          //@ts-ignore
          datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());
        const body = await c.req.json();
        
        //ZOD VALIDTION THAT USER SEND THE CORRECT CRED
        const {success} = signinInputs.safeParse(body)
        if(!success){
          c.status(411)
          return c.json({
            msg:"Invalid Inputs"
          })
        }

        const user = await prisma.user.findUnique({
          where: {
            email: body.email,
            password: body.password
          }
          
        })
        if (!(user)) {
          c.status(404)
          return c.text("User Does not Exist")
        }
       //@ts-ignore
       return c.json({
        msg:"Logged in Succedd!!!!"
       })
  
      })