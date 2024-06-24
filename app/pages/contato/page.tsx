'use client'
import styles from '@/app/Glass.module.css'
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { motion } from "framer-motion"


export default function Contato() {
    return (
      <motion.main className="justify-center flex relative items-center overflow-hidden w-screen h-screen" animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }} initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <div className={`flex h-[500px] w-[800px] ${styles.glass} overflow-hidden`}> 
        <div className="h-[700px] w-[500px] ml-2 z-10 relative">
            <form className='mt-[25px] ml-10'>
            <div>
              <h1 className='text-white text-xl'> Nome: </h1>
               <input type="text" id="first_name" className={`${styles.glass} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[295px] mt-2`} placeholder="ex: Jhon Doe" required />
            </div>
            <div className='mt-2'>
              <h1 className='text-white text-xl'> Assunto: </h1>
               <input type="text" id="first_name" className={`${styles.glass} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[295px] mt-2`} placeholder="ex: Proposta de Estágio" required />
            </div>
            <div className='mt-2'>
              <h1 className='text-white text-xl'> E-mail: </h1>
               <input type="text" id="first_name" className={`${styles.glass} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[295px] mt-2`} placeholder="ex: usuario@gmail.com" required />
            </div>
            <div className={`w-[300px] mt-[40px] mb-4 border border-gray-200 rounded-lg ${styles.glass} dark:bg-gray-700 dark:border-gray-600`}>
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label className="sr-only">Sua mensagem...</label>
                      <textarea id="comment" rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Sua mensagem..." required ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#1ED760] rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Enviar
                    </button>
                </div>
              </div>
            </form>
        </div>
          <div className='flex-1'>
            <div className='flex mt-[202px] gap-5 z-10'>
              <FaLinkedin className='text-white text-3xl'/>
              <IoLogoWhatsapp className='text-white text-3xl'/>
              <FaGithub className='text-white text-3xl'/>
              <RiInstagramFill className='text-white text-3xl'/>
            </div>
            <Image src={"/images/android_form_icon.gif"} alt='gif' width={150} height={150} className='brightness-200 contrast-200 saturate-0 grayscale relative ml-[15px] mt-[180px] z-10' unoptimized/>
            <Image src="/images/form_text.png" alt="BannePC" layout="fill" className="rounded-xl" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        
      </motion.main>
    );
  }