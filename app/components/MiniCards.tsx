'use client'
import Image from "next/image"

type Props = {
    imageUrl : string,
    text : string
}

export default function MiniCards({imageUrl, text} : Props){
    return (
        <div className="h-[50px] w-[60px] items-center justify-center flex-col text-center">
            <Image src={imageUrl} alt="image" height={100} width={100} />
            <h1 className="text-white text-[9px] break-words">
                 {text}
            </h1>
        </div>
    )  
}
