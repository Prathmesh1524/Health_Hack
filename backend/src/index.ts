import { Hono } from 'hono'
import { sign  } from 'hono/jwt'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'
import { DiseaseRouter } from './routes/disesase'


//to remove red sqiglies form env.DATABASE_URL  Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();
app.get("/",(c)=>{
  return c.text("Hello World" )
})

 //USED TO COMMUNICATE FRONTEND WITH BACKEND
  app.use("/*",cors())
app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter);
app.route("/api/v1/decises", DiseaseRouter);	




export default app
