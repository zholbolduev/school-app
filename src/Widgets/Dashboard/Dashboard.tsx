import "./Dashboard.scss";
import logo from "../../Shared/assets/logo-white.svg";
import magnifer from "./assets/Magnifer.svg";
import { ChangeEvent, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { menuItems } from "./menuItems";
import { PageStates } from "./types";

const Dashboard = () => {
  const [search, setSearch] = useState<string>("");
  const [pageStates, setPageStates] = useState<PageStates>({
    main: "",
    courses: "",
    paid: "",
    aboutUs: "",
  });
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onPage = () => {
    const pagesMap: { [key: string]: keyof typeof pageStates } = {
      "/": "main",
      "/course-free": "courses",
      "/course-paid": "paid",
      "/about-us": "aboutUs",
    };

    const currentPage = pagesMap[pathname] || "main";
    setPageStates({
      ...pageStates,
      main: currentPage === "main" ? "active" : "",
      courses: currentPage === "courses" ? "active" : "",
      paid: currentPage === "paid" ? "active" : "",
      aboutUs: currentPage === "aboutUs" ? "active" : "",
    });
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
          {menuItems.map(({ path, stateKey, imgSrc, alt, label }) => (
            <div
              key={path}
              onClick={() => navigate(path)}
              className={pageStates[stateKey]}
            >
              <img src={imgSrc} alt={alt} />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
