import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function NavMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [menuHamburguer, setMenuHamburguer] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenuHamburguer(true);
      } else {
        setMenuHamburguer(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavOpen]);

  

  return (
    <>
      {menuHamburguer ? (
        <header
          className="flex justify-between items-center mx-11 mt-10 animate-fade animate-once animate-ease-in animate-delay-150
        
        "
        >
          <a href="/">
            <h1 className="text-4xl text-verdeVibrante">LS</h1>
          </a>
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 bg-verdeVibrante"></span>
                <span className="block h-0.5 w-8 bg-verdeVibrante"></span>
                <span className="block h-0.5 w-8 bg-verdeVibrante"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav " : "hideMenuNav"}>
                <div
                  className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-verdeVibrante"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase ">
                    <Link to="about" smooth={true} duration={500} className="">
                      About
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link
                      to="skills"
                      smooth={true}
                      duration={500}
                      className="hover:text-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer"
                    >
                      Skills
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link
                      to="work"
                      smooth={true}
                      duration={500}
                      className="hover:text-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer"
                    >
                      Work
                    </Link>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="hover:text-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                <style>{`
              .hideMenuNav {
                display: none;
              }
              .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: white;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: start;
                padding-top: 70px;
                align-items: center;
                transition: all;
                transition-duration: 1000ms;
              }
            `}</style>
              </div>
            </section>
          </nav>
        </header>
      ) : (
        <header className="py-5 animate-fade animate-once animate-ease-in ">
          <div className="flex justify-between items-center px-20 text-white">
            <a href="#">
              <h1 className="text-4xl text-verdeVibrante">LS</h1>
            </a>

            <nav className=" flex gap-10 font-bold">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer"
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer"
              >
                Skills
              </Link>
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="hover:text-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer"
              >
                Work
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-verdeVibrante hover:transition-all hover:duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
