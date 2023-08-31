import "./Navbar.scss";
import mag from "./assets/mag.svg";
import config from "./assets/configIcon.svg";
import arrow from "./assets/chevron_down.svg";
import { useNavigate } from "react-router";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const storage: any = localStorage.getItem("user");
  const [user, setUser] = useState<string>("name");

  const userStorage = JSON.parse(storage);
  const access = userStorage?.access_token;

  const getUser = async () => {
    const Authorization = `Bearer ${access}`;
    const config = {
      headers: { Authorization },
    };
    const response = await axios.get(
      `${baseAPI}/user/personal-info`,
      config
    );

    setUser(response.data.fullName);
  };

  // useEffect(() => {
  //   getUser();
  // }, []);
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
          <span>{user}</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
