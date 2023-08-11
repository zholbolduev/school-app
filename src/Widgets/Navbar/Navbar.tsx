import "./Navbar.scss";
import mag from "./assets/mag.svg";
import config from "./assets/configIcon.svg";
import arrow from "./assets/chevron_down.svg";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container_search-form">
          <input type="text" placeholder="поиск" />
          <img src={mag} alt="mag" />
        </div>
        <div className="navbar__container_config">
          <img src={config} alt="config" />
        </div>
        <div
          onClick={() => navigate("/profile-page")}
          className="navbar__container_user"
        >
          <div></div>
          <span>Алибек</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
