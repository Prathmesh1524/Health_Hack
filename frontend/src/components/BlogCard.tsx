
//HERE USER C6AN SEE ALL THE BLOGS

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    uploadDate: string
}

export const BlgoCard = ({
    authorName,
    title,
    content,
    uploadDate
}: BlogCardProps) => {

    return (
        <div>
            <div className=" flex p-4 ">
                <div className="flex flex-col justify-center ">
                    <Avatar name={authorName} />
                </div>
                <div className= "text-slate-500  pl-2">
                    {authorName}
                </div>
                    <div className="pl-2 font-extralight ">
                        {uploadDate}
                    </div>

            </div>
            <div>
                {title}
            </div>
            <div>
                {content}
            </div>
            <div className="bg-slate-400 h-0.5 w-full" >
            </div>
        </div>
    )

}

function Avatar({ name }: { name: string }) {
    return <div className="relative flex flex-col items-center justify-center w-6 h-6 overflow-hidden bg-gray-400 rounded-full">
        <span className="text-md text-gray-600 ">
            {name[0]}
        </span>
    </div>

}