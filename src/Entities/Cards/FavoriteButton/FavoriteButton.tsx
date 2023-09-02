import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseAPI } from "../../../Shared/baseAPI";
import "./FavoriteButton.scss";

const FavoriteButton = ({ card }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const getUserFavorites = async () => {
      try {
        const storage: any = localStorage.getItem("user");
        const userStorage = JSON.parse(storage);
        const access = userStorage.access_token;

        const Authorization = `Bearer ${access}`;
        const config = {
          headers: { Authorization },
        };

        const response = await axios.get(
          `${baseAPI}/user/favorite/get`,
          config
        );

        const isCourseInFavorites = response.data.some(
          (favoriteCourse) => favoriteCourse.id === card.id
        );

        setIsFavorite(isCourseInFavorites);
      } catch (error) {
        console.error("Error fetching user favorites:", error);
      }
    };

    getUserFavorites();
  }, [card.id]);

  const toggleFavorite = async () => {
    try {
      const storage: any = localStorage.getItem("user");
      const userStorage = JSON.parse(storage);
      const access = userStorage.access_token;

      const Authorization = `Bearer ${access}`;
      const config = {
        headers: { Authorization },
      };

      const action = isFavorite ? "remove" : "add";

      if (action === "remove" && !isModalOpen) {
        // Проверяем, было ли подтверждение удаления
        setIsModalOpen(true); // Открываем модальное окно подтверждения
      } else {
        // Выполняем удаление только если необходимо и подтверждение было дано
        const response = await axios.post(
          `${baseAPI}/user/favorite/${action}/${card.id}`,
          {},
          config
        );

        if (response.status === 200) {
          const newIsFavorite = !isFavorite;
          setIsFavorite(newIsFavorite);

          if (action === "add") {
            console.log("Успешно добавлен в избранное");
          } else if (action === "remove") {
            console.log("Успешно удалён из избранного");
            setIsModalOpen(false); // Закрываем модальное окно после удаления
          }
        } else {
          console.log("Toggle favorite unsuccessful:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      console.log("Response data:", error.response?.data);
      console.log("Response status:", error.response?.status);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      // Выполните удаление из избранного только при подтверждении пользователя
      const storage: any = localStorage.getItem("user");
      const userStorage = JSON.parse(storage);
      const access = userStorage.access_token;

      const Authorization = `Bearer ${access}`;
      const config = {
        headers: { Authorization },
      };

      const response = await axios.post(
        `${baseAPI}/user/favorite/remove/${card.id}`,
        {},
        config
      );

      if (response.status === 200) {
        setIsModalOpen(false); // Закрываем модальное окно
        setIsFavorite(false); // Обновляем состояние, чтобы сделать сердечко пустым
      } else {
        console.log("Delete favorite unsuccessful:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting favorite:", error);
      console.log("Response data:", error.response?.data);
      console.log("Response status:", error.response?.status);
    }
  };

  return (
    <>
      <img
        className={`paidCourseCard_imgHeart ${
          isFavorite ? "red-heart" : "gray-heart"
        }`}
        onClick={() => toggleFavorite()}
      />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="btnCloseFv"
              style={{ padding: "10px" }}
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <p>
              Вы действительно хотите <br /> удалить из избранных?
            </p>
            <div className="modal-buttons">
              <button onClick={() => handleConfirmDelete()}>Удалить</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoriteButton;
