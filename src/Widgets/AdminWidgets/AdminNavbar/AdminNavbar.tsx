import { useNavigate } from "react-router";
import "./AdminNavbar.scss";

const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="adminNavbar">
      <button onClick={() => navigate("create-free")}>
        создать курс(бесплатный)
      </button>
      <button onClick={() => navigate("create-paid")}>
        создать курс(платный)
      </button>
      <button onClick={() => navigate("contact-list")}>
        список обращений
      </button>
      <button onClick={() => navigate("request-list")}>
        список заявок
      </button>
    </div>
  );
};

export default AdminNavbar;
