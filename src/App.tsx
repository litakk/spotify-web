import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Login from "./pages/Login";
import AuthorizedLayout from "./layouts/AuthorizedLayout";
import Home from "./pages/Home";
import "./App.css";
import { createContext } from "react";

interface AppProps {}

export const tokenCTX = createContext<string>("");

const App: React.FC<AppProps> = () => {
  const token: string = localStorage.getItem("token") || "";

  return (
    <>
    <tokenCTX.Provider value={token}>

      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/me" element={<AuthorizedLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </tokenCTX.Provider>
    </>
  );
};

export default App;
