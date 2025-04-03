import { tokenCTX } from "@/App";
import { BASE_URL } from "@/exports";
import { useContext, useEffect, useState } from "react";

interface AllMusicProps {}

const AllMusic: React.FC<AllMusicProps> = () => {
  const [tracks, setTracks] = useState([]);
  const token = useContext(tokenCTX);

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await fetch(BASE_URL + "/me/tracks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        setTracks(data.items);
      } catch (err) {
        console.error(err);
      }
    };

    getTracks();
  }, []);

  return (
    <>
      <div>


      <h1>Tracks</h1>
			<hr />
			{tracks?.map((track: any) => (
				<div key={track.track.id}>
					<img src={track.track.album.images[2].url || ""} alt="" />
					<h3>{track.track.name}</h3>
					<p>{track.track.artists[0].name}</p>
				</div>
			))}


      </div>
    </>
  );
};

export default AllMusic;
