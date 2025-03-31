import { useState, useEffect } from "react";
import { FaSpotify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = "b0d375f1165c43f5bd07e2d70e7399cc";
const CLIENT_SECRET = "0ac57d11524d49a9b7b4ea0b15ab065a";
const TOKEN_URL = "https://accounts.spotify.com/api/token";

function SignIn() {
    const [token, setToken] = useState(localStorage.getItem("spotify_token") || null);
    const navigate = useNavigate();

    async function fetchToken() {
        console.log("Fetching new token...");

        try {
            const response = await fetch(TOKEN_URL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    grant_type: "client_credentials",
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                }),
            });

            const data = await response.json();
            console.log("API Response:", data);

            if (data.access_token) {
                const expiresIn = data.expires_in * 1000;
                const expiryTime = Date.now() + expiresIn;

                setToken(data.access_token);
                localStorage.setItem("spotify_token", data.access_token);
                localStorage.setItem("spotify_token_expiry", expiryTime.toString());

                return data.access_token;
            } else {
                console.error("Ошибка получения токена:", data);
                return null;
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
            return null;
        }
    }

    async function handleLogin() {
        const storedToken = localStorage.getItem("spotify_token");
        const tokenExpiry = localStorage.getItem("spotify_token_expiry");

        if (storedToken && tokenExpiry && Date.now() < Number(tokenExpiry)) {
            console.log("Используется сохраненный токен");
            setToken(storedToken);
            navigate("/me");
        } else {
            console.log("Токен устарел, запрашиваем новый...");
            const newToken = await fetchToken();
            if (newToken) {
                navigate("/me");
            } else {
                alert("Ошибка при получении нового токена");
            }
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-500">
            <button
                onClick={handleLogin}
                className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
                <FaSpotify size={20} />
                Войти
            </button>
        </div>
    );
}

export default SignIn;
