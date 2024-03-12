import jsLogo from "../../assets/js.png";
import cssLogo from "../../assets/css.png";
import htmlLogo from "../../assets/html.png";
import tsLogo from "../../assets/ts.png";
import reactLogo from "../../assets/react.png";

import { Element } from "react-scroll";

import style from "./indexs.module.css";

import { useScrollVisibility } from "../../utils/scrolUtils";

export default function SkilPage() {
  const isVisibleSkillName = useScrollVisibility("skillsName", 50);
  const isVisibleSkill = useScrollVisibility("skill", 50);
  return (
    <section id="skills">
      <Element
        name="skillsName"
        id="skillsName"
        className={`bg-black ${style.borderline} pt-14  pb-32  ${
          isVisibleSkillName ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 `}
      >
        <div className="flex flex-col items-center text-white ">
          <h2
            className={`text-6xl font-bold text-verdeVibrante ${
              isVisibleSkillName
                ? "animate-fade-down animate-once animate-delay-[200ms]"
                : ""
            }`}
          >
            Skills
          </h2>
          <p
            className={`m-5 font-medium text-xl ${
              isVisibleSkillName
                ? "animate-fade-up animate-once animate-delay-[200ms]"
                : ""
            }`}
          >
            Minhas principais tecnologias
          </p>
        </div>
        <Element
          name="skill"
          id="skill"
          className={`text-white max-w-7xl mx-auto ${
            isVisibleSkill ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 `}
        >
          <ul
            className={`flex justify-around items-center w-11/12 mx-auto ${style.maxWidth}
          max-lg:grid max-lg:grid-cols-3 max-lg:justify-items-center max-lg:gap-4
          max-lg:max-md:grid-cols-2  
          `}
          >
            <li
              className={`border-2 p-5 rounded-xl text-center hover:shadow-2xl hover:shadow-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer  ${
                isVisibleSkill
                  ? "animate-fade-right animate-once animate-ease-in-out"
                  : ""
              }`}
            >
              <img src={htmlLogo} className="w-20 mb-4 " alt="" />
              <span className="mt-10">HTML</span>
            </li>
            <li
              className={`border-2 p-5 rounded-xl text-center hover:shadow-2xl hover:shadow-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer 
              ${
                isVisibleSkill
                  ? "animate-fade-right animate-once animate-ease-in-out"
                  : ""
              }`}
            >
              <img src={cssLogo} className="w-20 mb-4 " alt="" />
              <span>CSS</span>
            </li>
            <li
              className={`border-2 p-5 rounded-xl text-center hover:shadow-2xl hover:shadow-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer ${
                isVisibleSkill
                  ? "animate-fade animate-once animate-ease-in-out"
                  : ""
              }`}
            >
              <img src={jsLogo} className="w-20 mb-4 " alt="" />
              <span>JAVASCRIPT</span>
            </li>
            <li
              className={`border-2 p-5 rounded-xl text-center hover:shadow-2xl hover:shadow-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer
              ${
                isVisibleSkill
                  ? "animate-fade-left animate-once animate-ease-in-out"
                  : ""
              }`}
            >
              <img src={tsLogo} className="w-20 mb-4 " alt="" />
              <span>TYPESCRIPT</span>
            </li>
            <li
              className={`border-2 p-5 rounded-xl text-center hover:shadow-2xl hover:shadow-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer
              ${
                isVisibleSkill
                  ? "animate-fade-left animate-once animate-ease-in-out"
                  : ""
              }`}
            >
              <img src={reactLogo} className="w-20 mb-4 " alt="" />
              <span>REACT</span>
            </li>
          </ul>
        </Element>
      </Element>
    </section>
  );
}
