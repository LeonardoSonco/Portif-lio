import { Element } from "react-scroll";
import { useScrollVisibility } from "../../utils/scrolUtils";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const isVisibleContactName = useScrollVisibility("contactName", 80);
  const [valueEffectForm, setValueEffectForm] = useState(100);
  const [valueEffectButton, setValueEffectButton] = useState(300);

  const isVisibleContactForm = useScrollVisibility(
    "contactForm",
    valueEffectForm
  );

  const isVisibleContactButton = useScrollVisibility(
    "contactButton",
    valueEffectButton
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setValueEffectButton(450);
        setValueEffectForm(200);
      } else {
        setValueEffectButton(300);
        setValueEffectForm(100);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="contact">
      <Element
        name="contactName"
        id="contactName"
        className={`text-white ${
          isVisibleContactName ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div
          className={`flex justify-center flex-col items-center
        max-md:mx-5 max-md:text-center
        ${
          isVisibleContactName
            ? "animate-fade-down animate-once animate-ease-in-out"
            : ""
        }
        `}
        >
          <h3 className="text-verdeVibrante font-bold text-6xl mb-2 mt-5">
            Contact
          </h3>
          <p className="text-lg">
            Se deseja entrar em contato comigo basta preencher as informações
            abaixo.
          </p>
          <span className="text-gray-400">
            * Formulário apenas ilustrativo, contatos estão no curriculo.
          </span>
        </div>

        <form action="" className="mt-10 text-center">
          <Element
            name="contactForm"
            id="contactForm"
            className={`text-white flex justify-center gap-5 items-center w-full
          max-md:flex-col 
          ${
            isVisibleContactForm ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 `}
          >
            <div
              className={`flex flex-col justify-between self-stretch w-1/3
             max-md:self-auto max-md:gap-5 max-md:w-10/12
             ${
               isVisibleContactForm
                 ? "animate-fade-right animate-once animate-ease-in-out"
                 : ""
             }
            `}
            >
              <div className="flex flex-col">
                <label
                  htmlFor="nome"
                  className="bg-verdeVibrante text-black text-lg font-semibold p-1"
                >
                  NOME
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  className="text-black text-lg font-semibold p-1 "
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="bg-verdeVibrante text-black text-lg font-semibold p-1"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-black text-lg font-semibold p-1"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="assunto"
                  className="bg-verdeVibrante text-black text-lg font-semibold p-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  name="assunto"
                  id="assunto"
                  className="text-black text-lg font-semibold p-1"
                  required
                />
              </div>
            </div>

            <div
              className={`flex flex-col w-1/3
            max-md:w-10/12
            ${
              isVisibleContactForm
                ? "animate-fade-left animate-once animate-ease-in-out"
                : ""
            }
            
            `}
            >
              <label
                htmlFor="mensagem"
                className="bg-verdeVibrante text-black text-lg font-semibold p-1"
              >
                MENSAGEM
              </label>
              <textarea
                name="mensagem"
                id=""
                cols={30}
                rows={8}
                className="text-black text-lg font-semibold p-1"
              ></textarea>
            </div>
          </Element>

          <Element
            name="contactButton"
            id="contactButton"
            className={`${
              isVisibleContactButton ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 `}
          >
            <button
              className={`text-black text-lg border-2 border-verdeVibrante font-semibold rounded-2xl w-1/4 bg-verdeVibrante my-6 py-2
          max-md:w-2/3 hover:bg-transparent hover:text-verdeVibrante  hover:transition-all hover:duration-200
          
          ${
            isVisibleContactButton
              ? "animate-fade-up animate-once animate-ease-in-out"
              : ""
          }

          `}
            >
              Enviar
            </button>
          </Element>
        </form>
      </Element>
    </section>
  );
}
