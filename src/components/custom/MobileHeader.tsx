import React, { useContext, useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { tokenCTX } from "@/App";
import { BASE_URL } from "@/exports";

interface MobileHeaderProps {}

const Header: React.FC<MobileHeaderProps> = () => {
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
        <>
            <div className="p-2 xl:hidden">
                <header className="flex items-center p-3 justify-between bg-[#121212] text-white">
                    <div className="flex items-center gap-3">
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
                        <h1 className="font-bold text-xl">Добрый день</h1>
                    </div>

                    <div className="">
                        <Sheet>
                            <SheetTrigger asChild>
                                <IoSettingsOutline size={25} className="w-7 h-7 sm:w-9 sm:h-9 md:w-8 md:h-8 cursor-pointer" />
                            </SheetTrigger>
                            <SheetContent className="bg-black text-white border-0 p-5">
                                <SheetHeader>
                                    <SheetTitle className="flex items-center text-white gap-3">
                                        {userData?.images?.[0]?.url ? (
                                            <img
                                                src={userData.images[0].url}
                                                alt="User Avatar"
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                                {userData?.display_name?.[0] || "U"}
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-bold">{userData?.display_name || "Пользователь"}</div>
                                            <div className="text-sm text-gray-400">Профиль</div>
                                        </div>
                                    </SheetTitle>

                                    <SheetDescription>
                                        <ul className="font-bold leading-9 cursor-pointer">
                                            <li className="flex items-center gap-2">Аккаунт <MdOutlineArrowOutward size={20} /></li>
                                            <li>Профиль</li>
                                            <Link to="/">
                                                <li>Выйти</li>
                                            </Link>
                                            <hr className="w-4 my-5" />
                                            <li className="text-sm leading-8">Premium</li>
                                            <li className="text-sm leading-8">Справка</li>
                                            <li className="text-sm leading-8">Скачать</li>
                                            <li className="text-sm leading-8">Конфидециальность</li>
                                            <li className="text-sm leading-8">Условия</li>
                                        </ul>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;