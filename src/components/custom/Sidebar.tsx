// Sidebar.tsx
import { GoSidebarCollapse } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { FiHeart, FiHome, FiSearch, FiMusic } from "react-icons/fi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { Button } from "../ui/button";
import { useState, useEffect, useContext } from "react";
import { tokenCTX } from "../../App";
import { BASE_URL } from "../../exports";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [savedTracks, setSavedTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const token = useContext(tokenCTX);

  useEffect(() => {
    const getSavedTracks = async () => {
      try {
        const response = await fetch(BASE_URL + "/me/tracks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setSavedTracks(data.items);
      } catch (err) {
        console.error(err);
      }
    };

    const getPlaylists = async () => {
      try {
        const response = await fetch(BASE_URL + "/me/playlists", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setPlaylists(data.items);
      } catch (err) {
        console.error(err);
      }
    };

    getSavedTracks();
    getPlaylists();
  }, [token]);

  return (
    <div className="h-full bg-neutral-900 p-4 overflow-y-auto">
      <div className="font-bold text-white">
        {/* Моя медиатека */}
        <div className="w-full pb-4 border-b border-neutral-800">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <GoSidebarCollapse
                size={25}
                className="text-neutral-400 hover:text-white cursor-pointer"
              />
              <h3 className="text-lg font-semibold">Моя медиатека</h3>
            </div>
            <button className="bg-neutral-800 p-1 rounded-full hover:bg-neutral-700 transition-colors">
              <IoMdAdd size={20} />
            </button>
          </div>

          {/* Сохраненные треки */}
          <div className="mb-4">
            <Link
              to={"/me/collection/tracks"}
              className="flex items-center gap-3 w-full p-2 hover:bg-neutral-800 rounded-md transition-colors"
            >
              <div className="bg-gradient-to-br from-purple-600 to-blue-400 p-2 rounded">
                <FiHeart className="text-white" size={18} />
              </div>
              <span className="text-sm font-medium">Сохраненные треки</span>
              <span className="ml-auto text-xs text-neutral-400">
                {savedTracks.length}
              </span>
            </Link>
          </div>

          {/* Плейлисты */}
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              className="flex items-center gap-3 w-full p-2 hover:bg-neutral-800 rounded-md transition-colors"
            >
              <div className="bg-neutral-700 p-2 rounded">
                <FiMusic size={18} />
              </div>
              <span className="text-sm font-medium truncate">
                {playlist.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
