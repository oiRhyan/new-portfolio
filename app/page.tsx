'use client'
import Image from 'next/image';
import styles from './Glass.module.css';
import { RiJavaLine } from 'react-icons/ri';
import { TbBrandKotlin } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAndroidstudio } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import Card from './components/Card';
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaReddit } from "react-icons/fa";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col sm:flex-row justify-center items-center relative overflow-hidden w-screen h-screen gap-4">
      <div className='flex-col justify-center'>
      <motion.div className={`flex justify-left lg:w-[415px] lg:h-[265px] md:w-[390px] md:h-[190px] w-[350px] h-[100px] ${styles.glass} z-0 items-center gap-2 md:w-[450px] mt-2`} animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 0.5 }} initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <motion.div>
           <Image src="/images/glass-image.png" alt="Banner" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }}/>
        </motion.div>
        <RiJavaLine className='text-white text-sm justify-center mt-[60px] ml-16 lg:text-2xl md:text-2xl lg:mt-28 md:mt-28'/>
        <TbBrandKotlin className='text-white text-sm justify-center mt-[60px] lg:text-2xl md:text-2xl lg:mt-28 md:mt-28'/>
        <TbBrandReactNative className='text-white text-sm justify-center mt-[60px] lg:text-2xl md:text-2xl lg:mt-28 md:mt-28'/>
        <SiAndroidstudio className='text-white text-sm justify-center mt-[60px] lg:text-2xl md:text-2xl lg:mt-28 md:mt-28'/>
        <IoLogoFirebase className='text-white text-sm justify-center mt-[60px] lg:text-2xl md:text-2xl lg:mt-28 md:mt-28'/>
      </motion.div>
      <motion.div className={`hidden justify-left lg:w-[415px] lg:h-[160px] lg:flex md:flex md:w-[390px] md:h-[190px] sm:hidden w-[350px] h-[180px] ${styles.glass} z-0 items-center gap-2 md:w-[450px] mt-4`} animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 0.5 }} initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <Image src="/images/Glass-pc-image.png" alt="BannerPC" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }} /> 
      </motion.div>
      </div>
      <motion.div className='flex-col justify-center items-center mt-2' animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 0.5 }} initial={{opacity: 0}} whileInView={{opacity: 1}}>
          <Card/>
          <div className={`${styles.glass} h-[60px] w-[300px] ml-8 flex justify-center items-center gap-5 lg:h-[65px] md:h-[65px] lg:w-[430px] md:w-[430px] lg:ml-0 md:ml-0 lg:gap-10 md:gap-10`}>
            <Link href={"https://www.linkedin.com/in/rhyan-araujo-chaves/details/certifications/"} target='_blank'>
                <FaLinkedin className='text-white text-3xl'/>
            </Link>
            <Link href={"https://wa.me/5511984793655?text=Ola!%20Fale%20comigo!"} target='_blank'>
                <IoLogoWhatsapp className='text-white text-3xl' />
            </Link>
            <Link href={"https://github.com/oiRhyan"} target='_blank'>
                <FaGithub className='text-white text-3xl'/>
            </Link>
            <Link href={"https://www.instagram.com/eiryder?utm_source=qr&igsh=ZWNobjQ5ZG52ZnE3"} target='_blank'>
                <BiLogoInstagramAlt className='text-white text-3xl'/>
            </Link>
            <Link href={"https://g.dev/rhyanaraujo"} target='_blank'>
                <Image src={'/images/google_dev_icon.png'} alt='googledevs' width={26} height={26} className='rounded-full'/>
            </Link>
          </div>
      </motion.div>
      <motion.div className={`hidden items-center justify-center ${styles.glass} h-[450px] w-[340px] mt-3 lg:flex md:flex overflow-hidden`} animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 0.5 }} initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <motion.div initial={{x : -140}} transition={{duration: 0.5}} whileInView={{x : 0}}>
          <Image src="/images/android_fundo_removido.gif" alt='gif' typeof='gif'height={200} width={200} className='relative right-[120px] rotate-45 top-[189px] z-20' unoptimized />
        </motion.div>
      <Image src="/images/sobre-mim.png" alt="BannePC" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }} /> 
      </motion.div>
    </main>
  );
}
