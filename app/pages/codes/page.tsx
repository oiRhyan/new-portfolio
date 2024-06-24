'use client'
import CardP from "@/app/components/CardP";
import {motion} from "framer-motion"
import styles from "@/app/Glass.module.css"


const StringoDesc = "Projeto desenvolvido apartir da API do Spotify, este projeto conta com um sistema de login integrado ao Spotify que possibilita a sincronização de contas e playlist do usúario em questão, além de poder trocar de faixas de maneira ilimitada." 
const WhatIfDesc = "Game de plataforma mobile desenvolvido para Android com o entuito de ensinar e fortalecer os conceitos de meio ambiente para crianças e adolescentes, desenvolvido durante o TCC do curso técnico em informática. Disponivel agora na Gamejolt."
const NetflixDesc = "Interface desenvolvida durante o curso de Desenvolvimento Android : Java & Kotlin, tem o objetivo de realizar uma clonagem da interface netflix de dispositivos móveis através do ConstraintLayout usando recursos como MaterialDesigner3 e Guidelines."

const GitHub = "https://skillicons.dev/icons?i=github"
const SiteAndGithub = "https://skillicons.dev/icons?i=github,vercel"
const StringLink = "https://github.com/oiRhyan/stringo-app-music"

export default function Code() {
    return (
      <main className="justify-center flex relative items-center overflow-hidden w-screen h-screen">
        <motion.div className={`flex gap-5 overflow-x-scroll overflow-y-hidden w-full py-4 scroll-smooth ml-6 mt-3`} animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 0.5 }} initial={{opacity: 0}} whileInView={{opacity: 1}}>
            <div className="flex gap-5">
              <CardP title={"Stringo: Concept Music App"} techs={"https://skillicons.dev/icons?i=react,nextjs,tailwind"} url={"/images/banner-1-image.png"} desc={StringoDesc} link="https://github.com/oiRhyan/stringo-app-music" />
              <CardP title={"What If World Ended"} techs={"https://skillicons.dev/icons?i=cs,unity,motion"} url={"/images/what-if-banner.png"} desc={WhatIfDesc} link="https://gamejolt.com/games/whatifworld/667617"/>
              <CardP title={"Netflix: Interface Conceitual"} techs={"https://skillicons.dev/icons?i=java,androidstudio,motion"} url={"/images/NetflixBanner.png"} desc={NetflixDesc} link="https://github.com/oiRhyan/app-netflix-concept" />
            </div>
        </motion.div>

      </main>
    );
  }