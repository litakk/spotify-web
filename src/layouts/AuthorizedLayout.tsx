import MobileHeader from "@/components/custom/MobileHeader";
import { Outlet } from "react-router-dom";
import MobileNavigate from "../components/custom/MobileNavigate";
import Player from "@/components/custom/Player";
import DesktopHeader from "@/components/custom/DesktopHeader";

interface AuthorizedLayoutProps {}

const AuthorizedLayout: React.FC<AuthorizedLayoutProps> = () => {
  return (
    <>
      <DesktopHeader/>
      <MobileHeader />
      <div className="pb-20">
      <Outlet />
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <Player />
        <MobileNavigate />
      </div>
    </>
  );
};

export default AuthorizedLayout;
