import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

const Layout = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-900 text-gray-100">
      {/* bg */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0  bg-gradient-to-br from-gray-900 via-gray-800  to-gray-900 opacity-80" />
        <div className="backdrop-blur-sm absolute inset-0" />
      </div>
      {/* content */}
      <Sidebar />
      <div className="z-20 flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
