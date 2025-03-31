
import { useState, useEffect } from "react";

interface Artist {
    id: string;
    name: string;
    popularity: number;
    genres: string[];
    images: { url: string }[];
}

const ArtistsList: React.FC = () => {
    const [artists, setArtists] = useState<Artist[]>([]);

    async function fetchArtists() {
        const token = localStorage.getItem("spotify_token");
        if (!token) {
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
        } 
    }
    console.log(artists);
    

    useEffect(() => {
        fetchArtists();
    }, []);


    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-500 dark:text-white">Начните с этой музыки</h2>
            
            {/* Главный артист (Билли Айлиш) */}
            {artists.length > 0 && (
                <div className="mb-6">
                    <div className="relative aspect-square w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg group">
                        {artists[0].images[0]?.url ? (
                            <img 
                                src={artists[0].images[0].url} 
                                alt={artists[0].name}
                                className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center absolute inset-0">
                                <span className="text-5xl">🎵</span>
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-white font-bold text-xl">{artists[0].name}</h3>
                            <p className="text-gray-300 text-sm">{artists[0].genres.slice(0, 2).join(", ")}</p>
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-center md:text-left">
                        {artists[0].name}: микс — {artists.slice(1, 4).map(a => a.name).join(", ")} и другие
                    </p>
                </div>
            )}
    
            {/* Остальные артисты с горизонтальным скроллом на мобилках */}
            <div className="relative">
                <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-x-auto pb-4 md:overflow-visible md:pb-0 scrollbar-hide">
                    {artists.slice(1).map((artist) => (
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
        </div>
    );
};

export default ArtistsList;