import "./Dashboard.scss";
import logo from "../../Shared/assets/logo-black.svg";
import clapperBoard from "./assets/Clapperboard.svg";
import clipboard from "./assets/Clipboard.svg";
import document from "./assets/Document.svg";
import heart from "./assets/Heart.svg";
import home from "./assets/Home.svg";
import login from "./assets/Login.svg";
import notebookFree from "./assets/NotebookFree.svg";
import notebookPaid from "./assets/NotebookPaid.svg";
import user from "./assets/User.svg";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__container_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dashboard__container_pages">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="dashboard__container_pages_btn"
          >
            <img src={home} alt="home_icon" />
            <span>Главная</span>
          </div>
          <div
            onClick={() => {
              navigate("/course-free");
            }}
            className="dashboard__container_pages_btn"
          >
            <img src={notebookFree} alt="notebookFree_icon" />
            <span>Курсы</span>
          </div>
          <div
            onClick={() => {
              navigate("/course-paid");
            }}
            className="dashboard__container_pages_btn"
          >
            <img src={notebookPaid} alt="notebookPaid_icon" />
            <span>Платные курсы</span>
          </div>
          <div
            onClick={() => {
              navigate("/");
            }}
            className="dashboard__container_pages_btn"
          >
            <img src={document} alt="document_icon" />
            <span>Тесты</span>
          </div>
          <div
            onClick={() => {
              navigate("/");
            }}
            className="dashboard__container_pages_btn"
          >
            <img src={clapperBoard} alt="clapperBoard_icon" />
            <span>Видео курсы</span>
          </div>
          <div
            onClick={() => {
              navigate("/about-us");
            }}
            className="dashboard__container_pages_btn"
          >
            <img src={clipboard} alt="clipboard_icon" />
            <span>О нас</span>
          </div>
          <div
            onClick={() => {
              navigate("/");
            }}
            className="dashboard__container_pages_btn"
          >
            <img src={heart} alt="heart_icon" />
            <span>Избранное</span>
          </div>
        </div>
        <div className="dashboard__container_line"></div>
        <div className="dashboard__container_log-out">
          <div
            onClick={() => navigate("/login-page")}
            className="dashboard__container_log-out_btn"
          >
            <img src={login} alt="login" />
            <span>Выйти</span>
          </div>
          <div
            onClick={() => navigate("/admin-page")}
            className="dashboard__container_log-out_btn"
          >
            <img src={user} alt="user" />
            <span>Админ Панель</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
