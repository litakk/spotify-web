import Header from "@/components/custom/Header";
import { Outlet } from "react-router-dom";
import Navigate from "../components/custom/Navigate";
import Player from "@/components/custom/Player";

interface AuthorizedLayoutProps {}

const AuthorizedLayout: React.FC<AuthorizedLayoutProps> = () => {
  return (
    <>
      <Header />
      <div className="pb-20">
      <Outlet />
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <Player />
        <Navigate />
      </div>
    </>
  );
};

export default AuthorizedLayout;
