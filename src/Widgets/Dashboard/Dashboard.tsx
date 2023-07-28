import "./Dashboard.scss";
import logo from "../../Shared/assets/logo-white.svg";
import blocks from "./assets/blocks.svg";
import cart from "./assets/cart.svg";
import home from "./assets/home.svg";
import info from "./assets/info.svg";
import magnifer from "./assets/Magnifer.svg";
import { ChangeEvent, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const Dashboard = () => {
  const [search, setSearch] = useState<string>("");
  const [main, setMain] = useState<string>("");
  const [courses, setCourses] = useState<string>("");
  const [paid, setPaid] = useState<string>("");
  const [aboutUs, setAboutUs] = useState<string>("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onPage = () => {
    if (pathname === "/") {
      setCourses("");
      setPaid("");
      setAboutUs("");
      setMain("active");
    } else if (pathname === "/courses") {
      setPaid("");
      setAboutUs("");
      setMain("");
      setCourses("active");
    } else if (pathname === "/paid") {
      setCourses("");
      setAboutUs("");
      setMain("");
      setPaid("active");
    } else if (pathname === "/about-us") {
      setCourses("");
      setPaid("");
      setMain("");
      setAboutUs("active");
    }
  };
  useEffect(() => {
    onPage();
  }, [pathname]);
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <img
          className="dashboard__wrapper_logo"
          src={logo}
          alt="logo"
        />
        <div className="dashboard__wrapper_search">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            type="text"
          />
          <div>
            {search ? null : <img src={magnifer} alt="magnifer" />}
          </div>
        </div>

        <div className="dashboard__wrapper_pages">
          <div onClick={() => navigate("/")} className={main}>
            <img src={home} alt="home" />
            <p>Главная</p>
          </div>
          <div
            onClick={() => navigate("/courses")}
            className={courses}
          >
            <img src={blocks} alt="blocks" />
            <p>Курсы</p>
          </div>
          <div onClick={() => navigate("/paid")} className={paid}>
            <img src={cart} alt="cart" />
            <p>Платные курсы</p>
          </div>
          <div
            onClick={() => navigate("/about-us")}
            className={aboutUs}
          >
            <img src={info} alt="info" />
            <p>О нас</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
