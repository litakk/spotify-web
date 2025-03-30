import { useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { TfiLayoutMediaRight } from "react-icons/tfi";
import { AiFillSpotify } from "react-icons/ai";

const Navigate: React.FC = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="flex justify-around py-3 left-0 w-full bg-black text-gray-400 gap-3 md:py-4">
      <div
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          active === "home" ? "text-white" : "text-gray-400"
        }`}
        onClick={() => setActive("home")}
      >
        <MdHomeFilled size={30} />
        <p className="text-xs">Главная</p>
      </div>

      <div
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          active === "search" ? "text-white" : "text-gray-400"
        }`}
        onClick={() => setActive("search")}
      >
        <IoSearchOutline size={30} />
        <p className="text-xs">Поиск</p>
      </div>

      <div
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          active === "library" ? "text-white" : "text-gray-400"
        }`}
        onClick={() => setActive("library")}
      >
        <TfiLayoutMediaRight size={30} />
        <p className="text-xs">Моя медиатека</p>
      </div>

      <div
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          active === "download" ? "text-white" : "text-gray-400"
        }`}
        onClick={() => setActive("download")}
      >
        <AiFillSpotify size={30} />
        <p className="text-xs text-center whitespace-normal sm:whitespace-nowrap">
          Скачать <br className="inline sm:hidden" /> приложение
        </p>
      </div>
    </div>
  );
};

export default Navigate;
