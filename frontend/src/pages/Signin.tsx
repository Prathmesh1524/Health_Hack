import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
import z from "zod"

export const Signin = () => {
       const signinInputs = z.object({
            email: z.string().email(),
            password: z.string().min(6)
        })
    type signinInputsType = z.infer<typeof signinInputs>
    return <>
        <div className="grid grid-cols-1 bg-gray-100 lg:grid-cols-2">
            <div >
                <Auth type="signin"/>
            </div>
            <div className="hidden lg:block">
            <Quote />
            </div>
        </div>
    </>

}