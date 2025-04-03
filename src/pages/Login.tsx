import { LOGIN_URL } from "@/exports";
import { useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

useEffect(()=> {
    const params = new URLSearchParams(window.location.hash);
    const token = params.get("#access_token")

    if(token) {
        localStorage.setItem("token", token)
        navigate("/me")
    }
}, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500">
      <a
        href={`${LOGIN_URL}?client_id=${
          import.meta.env.VITE_CLIENT_ID
        }&redirect_uri=${
          import.meta.env.VITE_REDIRECT_URI
        }&response_type=token&scope=user-read-private user-read-email user-library-read user-library-modify 
playlist-read-private playlist-read-collaborative playlist-modify-public 
playlist-modify-private user-follow-read user-follow-modify 
user-read-playback-state user-modify-playback-state user-read-currently-playing 
user-read-recently-played user-top-read streaming`}
      >
        <button
          // onClick={LoginFunction}
          className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
        >
          <FaSpotify size={20} />
          Войти
        </button>
      </a>
    </div>
  );
};

export default Login;
