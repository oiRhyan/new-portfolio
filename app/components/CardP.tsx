import Image from "next/image"
import styles from "../Glass.module.css"
import Link from "next/link"

type Props = {
    url: string,
    techs: string,
    title: string,
    desc: string,
    link: string
}

const CardP = ({url, techs, title, desc, link} : Props) => {
    return (
        <>
        <div className={`${styles.glass} h-[345px] w-[315px] mb-3 justify-center flex-col items-center lg:h-[460px] md:h-[365px] lg:w-[420px] md:w-[430px]`}>
            <Image className="ml-1 mt-3 rounded-2xl lg:ml-4 md:ml-4" src={url} alt="Sunset in the mountains" width={390} height={350}/>
        <div className="px-3 py-3">
        <div className="font-bold text-x mb-2 text-white lg:text-2xl md:text-2xl">{title}</div>
        <p className="text-gray-700 text-[10px] text-white lg:text-2x md:text-[15px]"> {desc} </p>
        </div>
        <div className="px-4 pt-1 flex">
         <img className="relative h-[25px] mb-4 lg:h-[29px] md:h-[29px] lg:mb-0 md:mb-0" src={techs} alt="icons"/>
         <Link href={link} target="_blank">
            <button className="bg-[#1ED760] hover:bg-[#1ED760] text-sm text-white font-bold py-1 px-6 h-[30px] w-[100px] ml-[160px] flex mb-5 rounded z-10 ">
                   Confira
            </button>
         </Link>
         <div className="flex ml-[250px]">
                
         </div>
        </div>
        </div>
        </>
    )
}

export default CardP;