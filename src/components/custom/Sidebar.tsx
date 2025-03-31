import { GoSidebarCollapse } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";
import { ResizablePanel } from "../ui/resizable";

const Sidebar: React.FC = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="hidden xl:block">
      {sidebar ? (
        <ResizablePanel
          defaultSize={27}
          maxSize={33}
          minSize={22}
          className="w-full h-screen bg-[#121212] px-3 py-4 rounded-[10px] m-2 transition-all duration-400 ease-in-out"
        >
          <div className="font-bold text-white p-2 rounded-lg shadow-lg">
            <div className="w-full p-3 border-b border-gray-800">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <GoSidebarCollapse size={25} onClick={() => setSidebar(false)} />
                  <h3 className="text-lg font-semibold">Моя медиатека</h3>
                </div>
                <div className="bg-[#1f1f1f] p-1 rounded-3xl">
                  <IoMdAdd size={20} />
                </div>
              </div>
              <div className="w-full bg-[#1f1f1f] rounded-[8px] py-4 px-5 my-8">
                <h3 className="text-[15px]">Создай свой первый плейлист</h3>
                <p className="font-normal text-[13px] my-2">
                  Это совсем не сложно! Мы поможем.
                </p>
                <Button className="rounded-3xl bg-white text-[#1f1f1f] h-[32px] mt-2 font-semibold">
                  Создай плейлист
                </Button>
              </div>
              <div className="w-full bg-[#1f1f1f] rounded-[8px] py-4 px-5 my-8">
                <h3 className="text-[15px]">Подпишись на интересные подкасты</h3>
                <p className="text-[13px] font-normal my-2">
                  Ты будешь узнавать о новых выпусках.
                </p>
                <Button className="rounded-3xl bg-white text-[#1f1f1f] h-[32px] mt-2 font-semibold">
                  Обзор
                </Button>
              </div>
            </div>
          </div>
        </ResizablePanel>
      ) : (
        <ResizablePanel className="w-[65px] h-screen bg-[#121212] px-3 py-4 rounded-[10px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <GoSidebarCollapse size={25} onClick={() => setSidebar(true)} />
            <div className="bg-[#1f1f1f] p-1 rounded-3xl">
              <IoMdAdd size={25} />
            </div>
          </div>
        </ResizablePanel>
      )}
    </div>
  );
};

export default Sidebar;
