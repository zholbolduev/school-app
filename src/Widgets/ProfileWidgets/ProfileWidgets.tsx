// import User from "../../Entities/ProfileUser/User";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";
import image from "./assets/Image.svg";
import "./ProfileWidgets.scss";
import { useState, useEffect } from "react";

const ProfileWidgets = () => {
  const storage: any = localStorage.getItem("user");
  const [user, setUser] = useState<object>({});

  const userStorage = JSON.parse(storage);
  const access = userStorage.access_token;

  const getUser = async () => {
    const Authorization = `Bearer ${access}`;
    const config = {
      headers: { Authorization },
    };
    const response = await axios.get(
      `${baseAPI}/user/personal-info`,
      config
    );

    setUser(response.data);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="profileWidgets">
      <div className="profileWidgets__img">
        <img src={image} alt="image" />
      </div>
      <div className="profileWidgets__info">
        <h5>Основные данные</h5>
        <div>
          <input value="Алибек" type="text" />
          <input value="Сыдыгалиев" type="text" />
          <input value="+996507771617" type="text" />
          <input value="alibeksydygaliev18@gmail.com" type="text" />
          <input value="Бишкек" type="text" />
          <input value="СОШ 25" type="text" />
        </div>
      </div>
    </div>
  );
};

export default ProfileWidgets;
