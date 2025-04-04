import React, { useContext, useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdMoreVert } from "react-icons/md";
import { tokenCTX } from "../App";
import { BASE_URL } from "../exports";
import { Skeleton } from "@/components/ui/skeleton";
import { FiHeart } from "react-icons/fi";

const Playlist: React.FC = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const token = useContext(tokenCTX);

  useEffect(() => {
    const fetchSavedTracks = async () => {
      try {
        const response = await fetch(`${BASE_URL}/me/tracks`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setTracks(data.items);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedTracks();
  }, [token]);

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
  };

  const handleTrackClick = (trackId: string) => {
    if (currentTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
    }
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-purple-900 to-black text-white min-h-screen p-8">
        <div className="flex items-end gap-6 mb-8">
          <Skeleton className="w-48 h-48 rounded-md" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-6 w-80" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-purple-900 to-black text-white min-h-screen p-8">
      {/* Playlist Header */}
      <div className="flex items-end gap-6 mb-8">
        <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center rounded-md shadow-2xl">
          <FiHeart size={48} className="text-white" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider mb-2">Плейлист</p>
          <h1 className="text-5xl font-bold mb-4">Сохраненные треки</h1>
          <p className="text-gray-300 mb-2">Все ваши любимые треки в одном месте</p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Spotify</span>
            <span>•</span>
            <span>{tracks.length} треков</span>
          </div>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center gap-6 mb-8">
        <button 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transform transition-transform hover:scale-105"
          onClick={() => currentTrack && handleTrackClick(currentTrack)}
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
      </div>

      {/* Tracks List */}
      <div className="bg-opacity-40 rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-800 text-gray-400 text-sm">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Название</div>
          <div className="col-span-4">Альбом</div>
          <div className="col-span-2 text-right">Длительность</div>
        </div>

        {tracks.map((item, index) => (
          <div 
            key={item.track.id}
            className={`grid grid-cols-12 gap-4 p-4 hover:bg-fuchsia-900 hover:bg-opacity-60 cursor-pointer ${currentTrack === item.track.id ? 'bg-gray-800 bg-opacity-40' : ''}`}
            onClick={() => handleTrackClick(item.track.id)}
          >
            <div className="col-span-1 flex items-center">
              {currentTrack === item.track.id && isPlaying ? (
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-1 h-3 bg-green-500 mx-[1px] animate-pulse"></div>
                  <div className="w-1 h-4 bg-green-500 mx-[1px] animate-pulse"></div>
                  <div className="w-1 h-2 bg-green-500 mx-[1px] animate-pulse"></div>
                </div>
              ) : (
                <span className="text-gray-400">{index + 1}</span>
              )}
            </div>
            <div className="flex col-span-5 gap-5">
            <img src={item.track.album.images[0].url} alt="" className="w-15 h-15 rounded-sm" />
            <div>
              <div className="font-medium text-white">{item.track.name}</div>
              <div className="text-sm text-gray-400">
            </div>

                {item.track.artists.map(artist => artist.name).join(", ")}
              </div>
            </div>
            <div className="col-span-4 text-gray-400">{item.track.album.name}</div>
            <div className="col-span-2 flex items-center justify-end gap-4">
              <span className="text-gray-400">{formatDuration(item.track.duration_ms)}</span>
              <button 
                className="text-gray-400 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  // Действие для кнопки "Еще"
                }}
              >
                <MdMoreVert size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;