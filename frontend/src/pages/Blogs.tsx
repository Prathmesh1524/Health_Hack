import { BlgoCard,  } from "../components/BlogCard"

export const Blogs= ()=>{
    return(
        <div>
            <BlgoCard  
                    authorName={"Prathmesh"}
            uploadDate={"2 dec 2024"}
            title={"Firs Blog"}
            content={"First testing blog for website"}
            />
            <BlgoCard authorName={"dfuia"}
            uploadDate={"21 dec 2024"}
            title={"Counsulration"}
            content={"Website"}
            />
             <BlgoCard authorName={"New User "}
            uploadDate={"21 dec 2024"}
            title={"Medication for Minor Diseas , cure Disease at home "}
            content={"There are some disease that can be cured at home...."}
            /> <BlgoCard authorName={"dfuia"}
            uploadDate={"21 dec 2024"}
            title={"Counsulration"}
            content={"Website......."}
            />
<div className="pt-2 justify-center items-center">
    
            <button onClick={getemail} className=" bg-slate-400 rounded-full ">Subscribe Newsletter</button>
</div>
        </div>
    )   
}

function getemail(){
    
}