'use client'
import CardP from "@/app/components/CardP";
import {motion} from "framer-motion"
import styles from "@/app/Glass.module.css"


const StringoDesc = "Projeto desenvolvido apartir da API do Spotify, este projeto conta com um sistema de login integrado ao Spotify que possibilita a sincronização de contas e playlist do usúario em questão, além de poder trocar de faixas de maneira ilimitada." 
const WhatIfDesc = "Game de plataforma mobile desenvolvido para Android com o entuito de ensinar e fortalecer os conceitos de meio ambiente para crianças e adolescentes, desenvolvido durante o TCC do curso técnico em informática. Disponivel agora na Gamejolt."
const NetflixDesc = "Aplicativo desenvolvido durante um teste técnico ministrado pela empresa Bipa. Seu objetivo é recuperar uma lista de Nodes apartir de uma API via retrofit e converter os dados de Sat para Bitcoin, e Unix para data e horas das ultimas atualização de cada node."
const CalculadoraIMC = "Calculadora de IMC desenvolvida durante o curso de Desenvolvimento Android : Java & Kotlin, o usúario pode inserir sua altura e peso atual para que o aplicativo possa fazer uma comparação de status e então apresentar um resultado em sua tela de resultados."
const JokenPoText = "Jogo Jokenpo adaptado para mobile utilizando Java, o jogo consiste em que o jogador opite por uma das três opções pedra, papel ou tesoura, em seguida, o código da CPU irá randomizar uma opção de escolha e ao fim será comparada com o do jogador."
const AlcoolText = "Este projeto é mais um dos vários desenvolvidos durante o curso de desenvolvimento para Android. Seu objetivo é permitir que o usuário insira informações sobre os preços da gasolina e do álcool, assim podendo encontrar o melhor custo beneficio."


const GitHub = "https://skillicons.dev/icons?i=github"
const SiteAndGithub = "https://skillicons.dev/icons?i=github,vercel"
const StringLink = "https://github.com/oiRhyan/stringo-app-music"
const IMC = "https://github.com/oiRhyan/app-calculadora-imc"
const Jokenpo = "https://github.com/oiRhyan/app-jokenpo"
const Gasolina = "https://github.com/oiRhyan/app_alcool_ou_gasolina"


export default function Code() {
    return (
      <main className="justify-center flex relative items-center overflow-hidden w-screen h-screen">
        <motion.div className={`flex gap-5 overflow-x-scroll overflow-y-hidden w-full py-4 scroll-smooth ml-6 mt-3`} animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 0.5 }} initial={{opacity: 0}} whileInView={{opacity: 1}}>
            <div className="flex gap-5">
              <CardP title={"Stringo: Concept Music App"} techs={"https://skillicons.dev/icons?i=react,nextjs,tailwind"} url={"/images/banner-1-image.png"} desc={StringoDesc} link="https://github.com/oiRhyan/stringo-app-music" />
              <CardP title={"What If World Ended"} techs={"https://skillicons.dev/icons?i=cs,unity,motion"} url={"/images/what-if-banner.png"} desc={WhatIfDesc} link="https://gamejolt.com/games/whatifworld/667617"/>
              <CardP title={"Bipa: Conding Challenge"} techs={"https://skillicons.dev/icons?i=kotlin,androidstudio"} url={"/images/bipa.png"} desc={NetflixDesc} link="https://github.com/oiRhyan/bipa-coding-challenge-app" />
              <CardP title={"Calculadora de IMC para Android"} techs={"https://skillicons.dev/icons?i=kotlin,androidstudio,motion"} url={"/images/imc_banner.png"} desc={CalculadoraIMC} link="https://github.com/oiRhyan/app-calculadora-imc" />
              <CardP title={"Jokenpo para Android"} techs={"https://skillicons.dev/icons?i=java,androidstudio,motion"} url={"/images/jokenpo-mobile.png"} desc={JokenPoText} link={Jokenpo} />
              <CardP title={"Álcool ou Gasolina : Android App"} techs={"https://skillicons.dev/icons?i=kotlin,androidstudio,motion"} url={"/images/alcool.png"} desc={AlcoolText} link={Gasolina} />
            </div>
        </motion.div>

      </main>
    );
  }
