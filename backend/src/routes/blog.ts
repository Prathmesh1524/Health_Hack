import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { creatBlogInput, updateBlogInput } from '../zod';

export const blogRouter =new Hono<{
    Bindings:{
        DATABASE_URL:String    
        JWT_SECRETS :String
    },
   Variables:{
    userId:string
   }
}>();


//MIDDLEWARRE TO DO AUTH BEFORE POS,PUT.GET BLOG FROM THE USER
//GET THE HEADER/VERIFY THE HEADER 
    //IF THE HEADER IS CORRECT PROCEED
    //IF NOT 403
blogRouter.use("/*", async (c, next) => {
  const atuhHeader = c.req.header("Authorization")||""
  //@ts-ignore
    const user = await verify(atuhHeader, c.env.JWT_SECRETS)
    if (user) {
     //@ts-ignore
        c.set("userId",user.id);        
        await next()
    } else {
      c.status(403)
      c.text("You are not logged in ")
    }
  
    return c.json("hii from Middlwarte")
  })


  //CREAT , UPDATE , PARTICULAR, ENTIRE   
// TO CREATE A BLOG
// TESTING IN POSTMAN 
// SEND BODY AND TITLE GET A JWT FIRST AND ADD TO AUTHRIZATIOn
blogRouter.post("/", async (c) => {
    const userId= c.get("userId")
    const prisma = new PrismaClient({
      //@ts-ignore
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    try{

      
      const body =  await c.req.json();
      //ZOD VALIDATION FOR CORRECT INPUTSS

      const {success} = creatBlogInput.safeParse(body);
      if(!success){
        c.status(411)
        return c.json({
          msg:"Invalid Inputs"
        })
      }

      const post = await prisma.post.create({
        data:{
          //if dosent work add name as well
          title: body.title,
          content: body.content,
          authorid: userId 
        }
      })
      return c.json({
        msg:"Blog Created",
        id: post.id
     });
    }catch(err){
      console.log(err);
      return c.json("Unable to Create a blog")
    } 
  
    
  })
  
  //TO UPDATE THE BLOG
  blogRouter.put("/",async (c) => {
    const prisma = new PrismaClient({
      //@ts-ignore
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
      const body=  await c.req.json();
      //ZOD VALIDATION FOR CORRECT INPUTSS
      const {success } = updateBlogInput.safeParse(body)
      if(!success){
        c.status(411)
        return c.json({
          msg:"Invalid Inputs"
        })
      }
      const UpdatePost = await prisma.post.update({
        where:{
          id: body.id,
          
        },
        data:{
          title:body.title,
          content: body.content
        }
      })  
      
      return c.json({
        id: UpdatePost.id
       }) 
    }catch(e){
        console.log(e);
        c.status(411)
        return c.text("INTERNAL ERROR")
        
      }  
  })
  

  ///SEE ALL BLOGS  
blogRouter.get("/bulk",async (c)=>{
  const prisma = new PrismaClient({
      //@ts-ignore
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const posts = await prisma.post.findMany({})
    return c.json({
      posts
    })
})


  
  //TO SEE THE PARTICULAR BLOG   
  blogRouter.get("blogs/:id",async (c)=>{
    const  id =  c.req.param("id");
    const prisma = new PrismaClient({
      //@ts-ignore

      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
      const post = await prisma.post.findFirst({
        where:{
          id :Number(id)
        }   
      })
      return c.json({
        post
      }) 
      }catch(e){
        return c.json("Error occured while fetching the blog")
      }
        
    })
