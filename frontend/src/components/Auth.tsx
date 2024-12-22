
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import z from "zod"
import axios from "axios"
import { BACKEND_URL } from "../config"
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
 
    const signupInputs = z.object({
        email: z.string().email(),
        password: z.string().min(6),
        name: z.string().optional()
    })
    type signupInputsType = z.infer<typeof signupInputs>
    const navigate= useNavigate()

    const [postInputs, setpostInputs] = useState<signupInputsType>({
        email: "",
        password: "",
        name: "" 
    })

    //TO COMMUNICATE WITH THE BACKEND AND ENTER THE DATA
    async function Request(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ?"signup":"signin"}`,postInputs)
                const jwt = response.data.jwt;
                localStorage.setItem("token", jwt);
                navigate("/model");
        }catch(e){ 
            console.log(e)        
        }
    }
    return <>
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div>
                    <div>
                        <div className="font-bold text-2xl p-10">
                            Create an Account
                            <div className=" text-sm text-slate-700 ">
                             {type==="signin" ? "Don't have Account? ":  "Already have account? "}
                                <Link className="underline hover:text-slate-500" to={type==="signin"?"/signup":"/signin"}>
                                {type==="signin"?"Sign up":"Sign in"}
                                </Link>
                            </div>
                        </div>
                        <div className="ont-semibold p-2 pt-7">
                           {type==="signup"?  <LableInputs lable="Username" placeholder="Your Name" onchange={(e) => {
                                setpostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                })

                            }} />
                        :null}
                            <LableInputs lable="Email" placeholder="abc@gmail.com" onchange={(e) => {
                                setpostInputs({
                                    ...postInputs,
                                    email: e.target.value
                                })

                            }} />  <LableInputs lable="Password" type="password" placeholder="password" onchange={(e) => {
                                setpostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                })

                            }} />
                        </div>
                        <button onClick={Request} type="submit" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 
                        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                      ">{type === "signup"?"Sign up" :"Sign in"}</button>

                    </div>
                </div>
            </div>
        </div>
    </>
}









interface LableInputsType {
    lable: string,
    placeholder: string,
    onchange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string

}

function LableInputs({ lable, placeholder, onchange, type }: LableInputsType) {
    return <div >
        <div >
            <label className="block mb-2 text-md text-gray-900 font-bold">{lable}</label>
            <input onChange={onchange} type={type || "text"} className="bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " 
             placeholder={placeholder} required />
        </div>
    </div>

}