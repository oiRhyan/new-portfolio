'use client'
import styles from "@/app/Glass.module.css";
import { Avatar } from "flowbite-react";
import Image from "next/image";
import MiniCards from "@/app/components/MiniCards";
import {motion} from "framer-motion"

export default function Me() {
    return (
      <motion.main className="justify-center flex relative items-center overflow-hidden w-screen h-screen" animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }} initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <div className="flex flex-col h-screen justify-center items-center">
          <div className={`${styles.glass} h-[500px] w-[300px] justify-center items-center`}>
           <Image src="/images/backgroundperfil.png" alt="AndroidCerticates" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }}/>
           <Avatar img="/images/perfil.jpg" alt="Avatar" rounded className="rounded-full h-[140px] w-[140px] m-auto mt-6"/>
             <h1 className="text-white mt-5 ml-[75px]"> T E C N O L O G I A S  </h1>
           <Image src={"https://skillicons.dev/icons?i=html,css,javascript,java,kotlin,react,nextjs,tailwind,kali,mysql,firebase,git,gradle,androidstudio&perline=7"} height={240} width={240} alt="tecs" className="m-auto mt-4" />
             <h1 className="text-white mt-5 ml-[72px]"> Eventos mais Recentes  </h1>
             <div className="flex gap-4 justify-center items-center mt-3">
              <MiniCards imageUrl="/images/badge-android-studio.svg" text="Introdução ao Android Studio" />
              <MiniCards imageUrl="/images/badge-google.svg" text="Google I/O 2024" />
              <MiniCards imageUrl="/images/nlwexpertevent.png" text="SEBRAE: Ideias Empreendedoras" />
             </div>
          
          </div>
        </div>
        <div className="flex-col gap-10">
          <div className={`flex h-[250px] w-[450px] ml-3 ${styles.glass}`}>
            <Image src="/images/certificacoes.png" alt="AndroidCerticates" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }} />
          </div>
          <div className={`flex h-[230px] w-[450px] ml-3 ${styles.glass} mt-3 overflow-hidden`}>
          <Image src="/images/quem-sou-eu.png" alt="Eu" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }} />
            <Image src="/images/mascot_animation.gif" alt="Eu" layout="fill" className="rounded-xl ml-[180px] mt-[35px] overflow-hidden" style={{ objectFit: 'cover' }} /> 
          </div>
        </div>
        <div className="flex-col gap-10">
          <div className={`flex h-[370px] w-[280px] ml-3 ${styles.glass}`}>
          <Image src="/images/reactnative.png" alt="AndroidGIF" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }} />
          </div>
          <div className={`flex h-[110px] w-[280px] ml-3 mt-2 ${styles.glass}`}>
          <Image src="/images/recomend.png" alt="AndroidGIF" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        
      </motion.main>
    );
  }