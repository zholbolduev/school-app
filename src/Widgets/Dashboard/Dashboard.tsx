import "./Dashboard.scss";
import logo from "../../Shared/assets/logo-black.svg";
import clipboard from "./assets/Clipboard.svg";
import heart from "./assets/Heart.svg";
import home from "./assets/Home.svg";
import login from "./assets/Login.svg";
import notebookFree from "./assets/NotebookFree.svg";
import notebookPaid from "./assets/NotebookPaid.svg";
import user from "./assets/User.svg";
import { useLocation, useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const watch = pathname.slice(0, 6);
  return (
    <div className="dashboard">
      <div
        className={
          watch === "/watch"
            ? "dashboard__container-none"
            : "dashboard__container"
        }
      >
        <div
          className={`${
            watch === "/watch" ? "dashboard__logo-none" : "dashboard__logo"
          }`}
        >
          <img src={logo} alt="" />
        </div>

        <div className="dashboard__top">
          <div
            onClick={() => navigate("/")}
            className={
              watch === "/watch" ? "dashboard__btn-none" : "dashboard__btn"
            }
          >
            <img src={home} alt="" />
            <h5>Главная</h5>
          </div>
          <div
            onClick={() => navigate("/course-free")}
            className={
              watch === "/watch" ? "dashboard__btn-none" : "dashboard__btn"
            }
          >
            <img src={notebookFree} alt="" />
            <h5>Курсы</h5>
          </div>
          <div
            onClick={() => navigate("/course-paid")}
            className={
              watch === "/watch" ? "dashboard__btn-none" : "dashboard__btn"
            }
          >
            <img src={notebookPaid} alt="" />
            <h5>Платные курсы</h5>
          </div>

          <div
            onClick={() => navigate("/about-us")}
            className={
              watch === "/watch" ? "dashboard__btn-none" : "dashboard__btn"
            }
          >
            <img src={clipboard} alt="" />
            <h5>О нас</h5>
          </div>
          <div
            onClick={() => navigate("/favorite")}
            className={
              watch === "/watch" ? "dashboard__btn-none" : "dashboard__btn"
            }
          >
            <img src={heart} alt="" />
            <h5>Избранное</h5>
          </div>
        </div>
        <div className="dashboard__line"></div>
        <div className="dashboard__bottom">
          <div
            onClick={() => navigate("/admin-page")}
            className={
              watch === "/watch" ? "dashboard__btn-none" : "dashboard__btn"
            }
          >
            <img src={user} alt="" />
            <h5>Админ панель</h5>
          </div>
          <div
            onClick={() => navigate("/login-page")}
            className={
              watch === "/watch" ? "dashboard__btn-none" : "dashboard__btn"
            }
          >
            <img src={login} alt="" />
            <h5>Выйти</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
