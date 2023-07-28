import { Outlet } from "react-router";
import Navbar from "../Widgets/Navbar/Navbar";
import Dashboard from "../Widgets/Dashboard/Dashboard";

const AppLayout = () => {
  return (
    <div className="app__layout">
      <Navbar />
      <div className="app__layout_wrapper">
        <Dashboard />
        <div className="app__layout_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
