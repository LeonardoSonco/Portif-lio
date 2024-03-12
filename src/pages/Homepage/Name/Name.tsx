import iconInstagram from "../../../assets/instagram.svg";
import iconLinkedin from "../../../assets/linkedin.svg";
import iconCurriculo from "../../../assets/cv.svg";

import iconGithub from "../../../assets/github.svg";
import style from "./Name.module.css";

export default function Name() {
  return (
    <>
      <div className="flex flex-col items-center col-span-4 justify-self-start">
        <div className="flex flex-col justify-center mb-6 gap-4 max-sm:text-center max-sm:mt-8 animate-fade-down animate-once animate-delay-[4ms] animate-ease-linear">
          <span className="text-2xl font-bold text-verdeVibrante max-lg:text-xl">
            Hi, I'm
          </span>
          <h1 className="ml-3 text-5xl font-bold text-white">Leonardo Sonco</h1>
        </div>
        <div
          className={`w-3/4 ${style.maxWidth} mb-4 animate-fade-right animate-once animate-delay-[10ms] animate-ease-linear`}
        >
          <p
            className="text-white text-justify font-medium text-xl
           max-lg:text-base
          "
          >
            Olá, meu nome é Leonardo Sonco, moro em Alegrete-RS. Estou cursando
            ciência da computação e estudando as diversas ferramentas de
            desenvolvimento web, buscando ingressar no mercado em breve. Possuo
            facilidade ao aprendizado, estou muito motivado pelos estudos, e sou
            focado, organizado e sempre busco aprimorar minhas habilidades,
            estudando e praticando constantemente.
          </p>
        </div>
        <ul className="flex justify-around w-full px-16">
          <a
            href="https://www.linkedin.com/in/leonardo-sonco/"
            className="cursor-pointer"
          >
            <li
              className={`border-2 border-verdeVibrante  rounded-full w-16 h-16 flex justify-center max-lg:w-12 max-lg:h-12 animate-flip-up animate-once animate-delay-[500ms] animate-ease-out ${style.scale}`}
            >
              <img src={iconLinkedin} alt="" className="w-10 max-lg:w-8" />
              <span className={style.tooltip}>LinkedIn</span>
            </li>
          </a>

          <a href="https://github.com/LeonardoSonco">
            <li
              className={`border-2 border-verdeVibrante rounded-full w-16 h-16 flex justify-center max-lg:w-12 max-lg:h-12 animate-flip-down animate-once animate-delay-[500ms] animate-ease-out ${style.scale}`}
            >
              <img src={iconGithub} alt="" className="w-10 max-lg:w-8" />
              <span className={style.tooltip}>GitHub</span>
            </li>
          </a>
          <a href="https://www.instagram.com/leonardokarling/">
            <li
              className={`border-2 border-verdeVibrante rounded-full w-16 h-16 flex justify-center max-lg:w-12 max-lg:h-12 animate-flip-up animate-once animate-delay-[500ms] animate-ease-out ${style.scale}`}
            >
              <img src={iconInstagram} alt="" className="w-10 max-lg:w-8" />
              <span className={style.tooltip}>Instagram</span>
            </li>
          </a>
          <a href="https://drive.google.com/file/d/1m5Oaz4p4-d--LRdFM9-kqavadzRGzE1S/view?usp=drive_link">
            <li
              className={`border-2 border-verdeVibrante rounded-full w-16 h-16 flex justify-center max-lg:w-12 max-lg:h-12 animate-flip-down animate-once animate-delay-[500ms] animate-ease-out ${style.scale}`}
            >
              <img src={iconCurriculo} alt="" className="w-10 max-lg:w-8" />
              <span className={style.tooltip}>Currículo</span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
