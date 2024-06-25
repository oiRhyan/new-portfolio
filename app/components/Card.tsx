import Image from "next/image"
import styles from "../Glass.module.css"
import Link from "next/link";

const Card = () => {
    return (
        <>
        <div className={`${styles.glass} h-[360px] w-[360px] mb-3 justify-center flex-col items-center lg:h-[365px] md:h-[365px] lg:w-[430px] md:w-[430px]`}>
            <Image className="ml-1 mt-3 rounded-2xl lg:ml-4 md:ml-4" src={"/images/banner-1-image.png"} alt="Sunset in the mountains" width={390} height={350}/>
        <div className="px-3 py-3">
        <div className="font-bold text-2xs mb-2 text-white"> Stringo: Concept Music App  </div>
        <p className="text-gray-700 text-xs text-white">
          Conecte com seu Spotify e ouça agora as músicas mais atuais de 2024 sem precisar de uma assinatura premium, mude de faixa quantas vezes quiser!
        </p>
      </div>
      <div className="px-4 pt-1 flex">
         <img className="relative h-[29px]" src={"https://skillicons.dev/icons?i=react,nextjs,tailwind"} alt="icons"/>
         <Link href={"https://stringo.vercel.app/login"} target="_blank">
          <button className="bg-[#1ED760] hover:bg-[#1ED760] text-sm text-white font-bold py-1 px-7 h-[30px] ml-[90px] flex mb-5 rounded z-10 lg:py-1 lg:px-2 md:py-1 md:px-2 md:ml-[189px] lg:ml-[189px] md:h-[200px] lg:h-[30px] lg:ml-[200px] ">
             Saiba Mais!
          </button>
         </Link>
         
      </div>
        </div>
        </>
    )
}

export default Card;