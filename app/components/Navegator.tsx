'use client'
import styles from '../Glass.module.css';
import { RiHome2Fill } from "react-icons/ri";
import { BiCodeAlt } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import playAudio from './sound/ClickSound';
import Link from 'next/link';

const Navegator = () => {
    return (
        <div className={`${styles.glass} m-4 justify-center items-center h-20 w-80 flex gap-8 z-10`}>
            <Link href={"/"} onClick={playAudio}>
              <RiHome2Fill className='text-white text-2xl'/>
            </Link>
            <Link href={'../pages/codes'} onClick={playAudio}>
              <BiCodeAlt className='text-white text-2xl'/>
            </Link>
            <Link href={'../pages/me'} onClick={playAudio}>
              <FaUser className='text-white text-xl'/>
            </Link>
            <Link href={'../pages/contato'} onClick={playAudio}>
               <FaPhone className='text-white text-xl'/>
            </Link>
        </div>
    )
}

export default Navegator;

