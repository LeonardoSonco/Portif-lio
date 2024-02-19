import { useScrollVisibility } from "../../utils/scrolUtils";
import data from "./data.json";

import { Element } from "react-scroll";
import style from "./indexs.module.css";
import { useEffect, useState } from "react";
import { fetchProjects } from "../../data/data";

interface Project {
  id: string;
  nome: string;
  descricao: string;
  repositorio: string;
  demo?: string;
  imagem: string;
}

export default function WorkPage() {
  const isVisibleWorkName = useScrollVisibility("workName", 200);
  const [isVisibleWorks, setIsVisibleWorks] = useState<number[]>([]);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const isVisibleButtonSeeMore = useScrollVisibility("seeMore", 150);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleSeeMore = () => {
    setVisibleProjects((prev) => {
      const newVisibleProjects = prev + 3;
      // Se o número total de projetos visíveis for menor do que a quantidade de dados,
      // então vamos garantir que pelo menos um projeto seja mostrado
      return Math.min(newVisibleProjects, data.length);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const newVisibleWorkIds = data.map((projeto) => {
        const element = document.getElementById(`work-${projeto.id}`);
        const elementTop = element?.getBoundingClientRect().top;
        return elementTop && elementTop - 50 <= window.innerHeight / 2
          ? projeto.id
          : 0;
      });

      // Atualiza o estado para acionar a renderização com base nas novas informações de visibilidade
      setIsVisibleWorks(newVisibleWorkIds.filter((id) => id !== 0));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    async function getProjects() {
      try {
        const projectsData = await fetchProjects();
        if (projectsData) {
          const mappedProjects: Project[] = projectsData.map((data) => ({
            id: data.id,
            nome: data.nome,
            descricao: data.descricao,
            demo: data.demo,
            repositorio: data.repositorio,
            imagem: data.imagem,
          }));

          setProjects(mappedProjects);
        } else {
          console.error("Dados de projetos não encontrados");
        }
      } catch (error) {
        console.error("Erro ao buscar os projetos:", error);
      }
    }

    getProjects();
  }, []);

  return (
    <section id="work" className="pt-4">
      <Element
        name="workName"
        id="workName"
        className={`text-white mt-10 ${
          isVisibleWorkName ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 `}
      >
        <h1
          className={`text-center text-verdeVibrante font-bold text-6xl ${
            isVisibleWorkName
              ? "animate-fade-right animate-once animate-ease-in-out"
              : ""
          }`}
        >
          WORK
        </h1>
        <p
          className={`text-center font-normal text-lg ${
            isVisibleWorkName
              ? "animate-fade-left animate-once animate-ease-in-out"
              : ""
          }`}
        >
          Alguns projeto que eu já desenvolvi ou estou desenvolvendo.
        </p>

        <ul className="flex flex-col ">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Element
              name={`work-${index + 1}`}
              id={`work-${index + 1}`}
              key={index + 1}
              className={`grid grid-cols-2 my-10 items-center ${
                isVisibleWorks.includes(index + 1) ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000 max-md:grid-cols-1 max-md:gap-3`}
            >
              <a
                href={project.repositorio}
                className={`w-4/5 mx-auto 
                
                ${
                  isVisibleWorks[index]
                    ? isVisibleWorks[index] && index % 2 === 0
                      ? "max-md:order-last animate-fade-left animate-once animate-ease-in-out"
                      : "animate-fade-right animate-once animate-ease-in-out"
                    : ""
                } 
                ${index % 2 === 0 ? "order-first" : "order-last"}
                }

                
                `}
              >
                <img
                  src={project.imagem}
                  className={` rounded-3xl hover:border-2 hover:border-verdeVibrante`}
                  alt=""
                />
              </a>

              <div
                className={`flex justify-around flex-col ${
                  style.textCenter
                } } ${
                  isVisibleWorks[index]
                    ? isVisibleWorks[index] && index % 2 === 0
                      ? "animate-fade-left animate-once animate-ease-in-out"
                      : "animate-fade-right animate-once animate-ease-in-out"
                    : ""
                } 
        `}
              >
                <div>
                  <h2 className="text-4xl font-semibold pb-2 text-verdeVibrante">
                    {project.nome}
                  </h2>
                  <p className="text-lg text-justify w-4/5">
                    {project.descricao}
                  </p>
                </div>
                <div className="flex w-full justify-center gap-2 mt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="border-2 w-1/3 py-2 border-verdeVibrante text-verdeVibrante hover:bg-verdeVibrante hover:text-white hover:font-bold  hover:transition-all hover:duration-300 "
                    >
                      Demo
                    </a>
                  )}
                  <a
                    href={project.repositorio}
                    className="border-2 w-1/3 py-2 border-verdeVibrante text-verdeVibrante hover:bg-verdeVibrante hover:text-white hover:font-semibold hover:transition-all hover:duration-300"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </Element>
          ))}
        </ul>

        {visibleProjects < data.length && (
          <Element
            name="seeMore"
            id="seeMore"
            className={`flex justify-center my-10 ${
              isVisibleButtonSeeMore ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <button
              onClick={handleSeeMore}
              className="border-2 py-2 px-4 border-verdeVibrante text-verdeVibrante hover:bg-verdeVibrante hover:text-white hover:font-semibold  hover:transition-all hover:duration-300"
            >
              Veja mais
            </button>
          </Element>
        )}
      </Element>
    </section>
  );
}
