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
    <div className="flex flex-col h-screen">
      <DesktopHeader />
      <MobileHeader />

      <div className="flex flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          <ResizablePanel
            defaultSize={20}
            minSize={18}
            maxSize={25}
            collapsible={true}
            collapsedSize={0}
            className="hidden xl:block min-w-[80px]"
          >
            <Sidebar />
          </ResizablePanel>

          <ResizableHandle className="hidden xl:flex w-1 bg-neutral-800 hover:bg-neutral-600" />

          <ResizablePanel className="bg-neutral-900">
            <div className="h-full overflow-y-auto">
              <Outlet />
              <Footer />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <Player />
        <MobileNavigate />
      </div>
    </div>
  );
};

export default AuthorizedLayout;
