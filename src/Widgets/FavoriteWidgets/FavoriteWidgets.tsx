import React, { useEffect, useState } from "react";
import "./FavoriteWidgets.scss";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";
import PaidCourseCard from "../../Entities/Cards/PaidCourseCard/PaidCourseCard";

const FavoriteWidgets: React.FC = () => {
  const storage: any = localStorage.getItem("user");
  const userStorage = JSON.parse(storage);
  const access = userStorage.access_token;

  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    const getUserFavorites = async () => {
      const Authorization = `Bearer ${access}`;
      const config = {
        headers: { Authorization },
      };

      try {
        const response = await axios.get(
          `${baseAPI}/user/favorite/get`,
          config
        );
        setUserFavorites(response.data);
      } catch (error) {
        console.error("Error fetching user favorites:", error);
      }
    };

    getUserFavorites();
  }, [access]);

  console.log(userFavorites);

  const cards = userFavorites.map((courseItem, index) => ({
    id: index + 1,
    title: courseItem.name,
    description: courseItem.description,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU",
    price: courseItem.price,
    type: "paid",
  }));

  return (
    <div className="favorite">
      <h2>Избранное</h2>
      <div className="favorite__wrapper">
        {cards.map((course) => (
          <PaidCourseCard key={course.id} card={course} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteWidgets;
