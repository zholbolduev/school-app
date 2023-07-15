import { Outlet } from "react-router";
import "./AdminPage.scss";
import AdminNavbar from "../../Widgets/AdminWidgets/AdminNavbar/AdminNavbar";

const AdminPage = () => {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminPage;
