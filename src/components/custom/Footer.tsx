import { FaInstagram } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-black pb-20 text-white py-10">
      <div className="w-full mx-auto p-4">
        {/* Контейнер колонок */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-5 lg:gap-9 lg:py-2">
          <div>
            <h2 className="font-bold mb-2">Компания</h2>
            <ul className="text-[#656565] font-bold space-y-1">
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
              <li>
                <a href="#">For the Record</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-2">Сообщества</h2>
            <ul className="text-[#656565] font-bold space-y-1">
              <li>
                <a href="#">Для исполнителей</a>
              </li>
              <li>
                <a href="#">Для разработчиков</a>
              </li>
              <li>
                <a href="#">Реклама</a>
              </li>
              <li>
                <a href="#">Для инвесторов</a>
              </li>
              <li>
                <a href="#">Для вендоров</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-2">Полезные ссылки</h2>
            <ul className="text-[#656565] font-bold space-y-1">
              <li>
                <a href="#">Справка</a>
              </li>
              <li>
                <a href="#">Бесплатное мобильное приложение</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-2">Планы Spotify</h2>
            <ul className="text-[#656565] font-bold space-y-1">
              <li>
                <a href="#">Индивидуальная подписка Spotify Premium</a>
              </li>
              <li>
                <a href="#">Premium для двоих</a>
              </li>
              <li>
                <a href="#">Premium для семьи</a>
              </li>
              <li>
                <a href="#">Premium для студентов</a>
              </li>
              <li>
                <a href="#">Бесплатная версия Spotify</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-start gap-6 space-y-1">
            <FaInstagram
              size={24}
              className="text-[#656565] font-bold hover:text-white cursor-pointer"
            />
            <VscTwitter
              size={24}
              className="text-[#656565] font-bold hover:text-white cursor-pointer"
            />
            <FaFacebook
              size={24}
              className="text-[#656565] font-bold hover:text-white cursor-pointer"
            />
          </div>
        </div>

        {/* Соцсети */}

        {/* Разделительная линия */}
        <hr className="w-full my-6 border-gray-700" />

        {/* Юридическая информация */}
        <div className="md:flex md:items-center md:justify-between text-[#656565] font-bold text-sm">
          <ul className="flex flex-wrap justify-start md:justify-start gap-x-5 gap-y-1">
            <li className="whitespace-nowrap">
              <a href="#">Юридическая информация</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#">Центр безопасности и конфиденциальности</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#">Файлы cookie</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#">О рекламе</a>
            </li>
            <li className="whitespace-nowrap">
              <a href="#">Специальные возможности</a>
            </li>
          </ul>

          <div className="whitespase-nowrap  mt-2 md:mt-0">
            © 2025 Spotify AB
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
