import { FaSpotify } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { AiFillShopping } from "react-icons/ai";
import { MdDownloadForOffline } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useEffect, useState } from "react";
import { tokenCTX } from "@/App";
import { BASE_URL } from "@/exports";
import { Link } from "react-router-dom";

const DesktopHeader: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const token = useContext(tokenCTX);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(BASE_URL + "/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <div className="hidden xl:flex w-full bg-black text-white px-6 py-5">
      <div className="flex justify-between items-center w-full max-w-screen-xl">
        {/* Левый блок (лого, кнопка "Домой", поиск) */}
        <div className="flex items-center gap-5">
          <a href="/me">
            <FaSpotify size={35} className="" />
          </a>
          <div className="bg-[#121212] p-2 rounded-4xl transition-all duration-100 hover:-translate-y-1 hover:scale-100">
            <Link to={"/me"}>
            <MdHomeFilled
              size={30}
              className="text-gray-300 cursor-pointer hover:text-white transition-all duration-100 hover:-translate-y-1 hover:scale-100"
            />
            </Link>
          </div>

          {/* Поле поиска */}
          <div className="relative">
            <Input
              placeholder="Что хочешь включить?"
              className="pl-10 pr-10 py-2 h-13 rounded-full border border-gray-700 bg-[#121212] text-white w-110 hover:bg-[#2d2c2c] hover:text-white"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <AiFillShopping className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        {/* Правый блок (кнопки иконки уведомлений, меню) */}
        <div className="flex items-center gap-5">
          <Button className="text-black bg-white border border-gray-600 font-bold rounded-2xl transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:border-white hover:shadow-lg hover:bg-white">
            Узнать больше о Premium
          </Button>

          <Button className="border-none hover:border-white flex items-center gap-2 transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:shadow-lg">
            <MdDownloadForOffline />
            Установить приложение
          </Button>

          {/* Уведомления */}
          <IoNotifications
            size={24}
            className="text-gray-300 cursor-pointer hover:text-white"
          />

          {/* Меню пользователя */}
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              {userData?.images?.[0]?.url ? (
                <img
                  src={userData.images[0].url}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {userData?.display_name?.[0] || "U"}
                </div>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 text-white border border-gray-700">
              <DropdownMenuLabel>{userData?.display_name || "Пользователь"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Аккаунт</DropdownMenuItem>
              <DropdownMenuItem>Профиль</DropdownMenuItem>
              <DropdownMenuItem>Переход на Premium</DropdownMenuItem>
              <DropdownMenuItem>Справка</DropdownMenuItem>
              <DropdownMenuItem>Скачать</DropdownMenuItem>
              <DropdownMenuItem>Настройки</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Выйти</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;