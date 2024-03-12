import style from "./Homepage.module.css";
import Name from "./Name/Name";
import Photo from "./Photo/Photo";

export default function Homepage() {
  return (
    <section id="about">
      <div
        className={`grid grid-cols-7 items-start mt-32 ${style.photoNameHeight}
        max-lg:flex max-lg:flex-col-reverse max-lg:mb-20 max-lg:items-center max-lg:mt-10
        max-w-7xl mx-auto
        `}
      >
        <Name />
        <Photo />
      </div>
    </section>
  );
}
