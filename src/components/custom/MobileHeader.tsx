
import React from "react";
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

interface MobileHeaderProps {

}

const Header: React.FC<MobileHeaderProps> = () => {
    return (
        <>
            <div className="p-2 xl:hidden">
                <header className="flex items-center p-3 justify-between bg-[#121212] text-white">
                    <h1 className="font-bold text-xl">Добрый день</h1>

                    <div className="">
                        <Sheet >
                            <SheetTrigger asChild><IoSettingsOutline size={25} className="w-7 h-7 sm:w-9 sm:h-9 md:w-8 md:h-8 cursor-pointer " /></SheetTrigger>
                            <SheetContent className="bg-black text-white border-0 p-5" >
                                <SheetHeader>
                                    <SheetTitle></SheetTitle>

                                    <SheetDescription>
                                    </SheetDescription>
                                        <ul className="font-bold leading-9 cursor-pointer">
                                        <li className="flex items-center gap-2">Аккаунт <MdOutlineArrowOutward size={20} /></li>
                                            <li>Профиль</li>
                                        <Link to="/">    <li>Выйти</li></Link>
                                        <hr className="w-4 my-5"/>
                                            <li className="text-sm leading-8">Premium</li>
                                            <li className="text-sm leading-8">Справка</li>
                                            <li className="text-sm leading-8">Скачать</li>
                                            <li className="text-sm leading-8">Конфидециальность</li>
                                            <li className="text-sm leading-8">Условия</li>
                                        </ul>
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
