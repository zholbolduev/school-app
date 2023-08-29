import { useNavigate } from "react-router";
import "./AdminNavbar.scss";

const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="adminNavbar">
      <button onClick={() => navigate("create-course")}>
        CRUD COURSES
      </button>
      <button onClick={() => navigate("comment-list")}>
        Comment List
      </button>
      <button onClick={() => navigate("contact-list")}>
        Conctact List
      </button>
      <button onClick={() => navigate("request-list")}>
        Request List
      </button>
    </div>
  );
};

export default AdminNavbar;
