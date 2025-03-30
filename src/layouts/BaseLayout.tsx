import { Outlet } from "react-router-dom";

interface BaseLayoutProps {
    
}
 
const BaseLayout: React.FC<BaseLayoutProps> = () => {
    return ( 
        <>
        <Outlet/>
        </>
     );
}
 
export default BaseLayout;