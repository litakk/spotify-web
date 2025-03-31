import MobileHeader from "@/components/custom/MobileHeader";
import { Outlet } from "react-router-dom";
import MobileNavigate from "../components/custom/MobileNavigate";
import Player from "@/components/custom/Player";
import DesktopHeader from "@/components/custom/DesktopHeader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "../components/custom/Sidebar";
import Footer from "@/components/custom/Footer";

interface AuthorizedLayoutProps {}

const AuthorizedLayout: React.FC<AuthorizedLayoutProps> = () => {


  return (
    <div className="">
      <DesktopHeader />
      <MobileHeader />

      <ResizablePanelGroup direction="horizontal">
          <Sidebar/>
        <ResizableHandle className="hidden xl:flex" />
        <ResizablePanel>
          <Outlet />
          <Footer />
        </ResizablePanel>
      </ResizablePanelGroup>

      <div className="fixed bottom-0 left-0 w-full">
        <Player />
        <MobileNavigate />
      </div>
    </div>
  );
};

export default AuthorizedLayout;
