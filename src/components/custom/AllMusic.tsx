import React, { useContext, useEffect, useState } from "react";
import { tokenCTX } from "../../App";
import { BASE_URL } from "../../exports";
import { Skeleton } from "@/components/ui/skeleton";

interface homeProps {}

const AllMusic: React.FC<homeProps> = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  const token = useContext(tokenCTX);

  useEffect(() => {
    const getFeaturedPlaylists = async () => {
      try {
        const response = await fetch(BASE_URL + "/browse/featured-playlists", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setFeaturedPlaylists(data.playlists.items);
      } catch (err) {
        console.error(err);
      } finally {
        setSkeleton(false);
      }
    };

    const getTopArtists = async () => {
      try {
        const response = await fetch(BASE_URL + "/me/top/artists", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setTopArtists(data.items);
      } catch (err) {
        console.error(err);
      }
    };

    const getNewReleases = async () => {
      try {
        const response = await fetch(BASE_URL + "/browse/new-releases", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setNewAlbums(data.albums.items);
      } catch (err) {
        console.error(err);
      }
    };

    const getCategories = async () => {
      try {
        const response = await fetch(BASE_URL + "/browse/categories", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setCategories(data.categories.items);
      } catch (err) {
        console.error(err);
      }
    };

    getFeaturedPlaylists();
    getTopArtists();
    getNewReleases();
    getCategories();
  }, [token]);

  return (
    <>
      {skeleton ? (
        <div className="flex flex-row gap-3 m-5 space-y-3 ">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex flex-col space-y-2 ">
                <Skeleton className="h-[125px] w-[250px] rounded-xl bg-gray-400" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="bg-neutral-900 text-white min-h-screen p-6">
          {/* Featured Playlists Section */}
          <section className="mb-10">
            <h1 className="text-2xl font-bold mb-6">Начни с этой музыки</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {featuredPlaylists.map((playlist: any) => (
                <div
                  key={playlist.id}
                  className="bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition-colors duration-200 group cursor-pointer"
                >
                  <div className="relative mb-4">
                    <img
                      src={playlist.images[0]?.url || ""}
                      alt={playlist.name}
                      className="w-full aspect-square object-cover rounded shadow-lg"
                    />
                    <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hover:scale-105 transform transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-medium truncate">{playlist.name}</h3>
                  <p className="text-neutral-400 text-sm truncate">
                    {playlist.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Top Artists Section */}
          <section className="mb-10">
            <h1 className="text-2xl font-bold mb-6">Your Top Artists</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {topArtists.map((artist: any) => (
                <div
                  key={artist.id}
                  className="bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition-colors duration-200 group cursor-pointer"
                >
                  <div className="relative mb-4">
                    <img
                      src={artist.images[0]?.url || ""}
                      alt={artist.name}
                      className="w-full aspect-square object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="font-medium truncate text-center">
                    {artist.name}
                  </h3>
                  <p className="text-neutral-400 text-sm truncate text-center">
                    {artist.genres[0] || "Artist"}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* New Releases Section */}
          <section className="mb-10">
            <h1 className="text-2xl font-bold mb-6">New Releases</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {newAlbums.map((album: any) => (
                <div
                  key={album.id}
                  className="bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition-colors duration-200 group cursor-pointer"
                >
                  <div className="relative mb-4">
                    <img
                      src={album.images[0]?.url || ""}
                      alt={album.name}
                      className="w-full aspect-square object-cover rounded shadow-lg"
                    />
                    <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hover:scale-105 transform transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-medium truncate">{album.name}</h3>
                  <p className="text-neutral-400 text-sm truncate">
                    {album.artists.map((artist: any) => artist.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section>
            <h1 className="text-2xl font-bold mb-6">Browse Categories</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {categories.map((category: any) => (
                <div
                  key={category.id}
                  className="bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition-colors duration-200 group cursor-pointer"
                >
                  <div className="relative mb-4">
                    <img
                      src={category.icons[0]?.url || ""}
                      alt={category.name}
                      className="w-full aspect-square object-cover rounded shadow-lg"
                    />
                  </div>
                  <h3 className="font-medium truncate">{category.name}</h3>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default AllMusic;
