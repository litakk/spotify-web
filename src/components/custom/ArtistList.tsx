import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Artist {
    id: string;
    name: string;
    popularity: number;
    genres: string[];
    images: { url: string }[];
}

const ArtistsList: React.FC = () => {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchArtists() {
        const token = localStorage.getItem("spotify_token");
        if (!token) {
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(
                "https://api.spotify.com/v1/search?q=Billie&type=artist&limit=10",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`${response.status}`);
            }

            const data = await response.json();
            setArtists(data.artists.items);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchArtists();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-500 dark:text-white">
                Начните с этой музыки
            </h2>

            {/* Скелетон при загрузке */}
            {isLoading && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {Array(5).fill(0).map((_, index) => (
                        <div key={index} className="flex-shrink-0 w-40 h-40 md:w-full md:aspect-square">
                            <Skeleton className="w-full h-full rounded-lg" />
                        </div>
                    ))}
                </div>
            )}

            {/* Контент после загрузки */}
            {!isLoading && artists.length > 0 && (
                <div className="relative">
                    <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-x-auto pb-4 md:overflow-visible md:pb-0 scrollbar-hide">
                        {artists.map((artist) => (
                            <div 
                                key={artist.id} 
                                className="flex-shrink-0 w-40 h-40 md:w-full md:aspect-square relative rounded-lg overflow-hidden shadow-md group"
                            >
                                {artist.images[0]?.url ? (
                                    <img 
                                        src={artist.images[0].url} 
                                        alt={artist.name}
                                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center absolute inset-0">
                                        <span className="text-4xl">🎵</span>
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                                    <h3 className="text-white font-bold text-sm truncate">{artist.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtistsList;
