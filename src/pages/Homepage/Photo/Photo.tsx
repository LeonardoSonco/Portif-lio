import photo from "../../../assets/fotoQuadrada.jpeg";

import style from "./Photo.module.css";

export default function Photo() {
  return (
    <div
      className="w-96 col-span-3
  max-lg:w-60 animate-fade-left animate-once animate-ease-in-out
  "
    >
      <img
        src={photo}
        alt=""
        className={`rounded-full border-2 ${style.border_photo}`}
      />
    </div>
  );
}
