import "./PaidCourseCard.scss";
import React, { useEffect, useState } from "react";
import "./PaidCourseCard.scss";
import { IProps } from "./paidTypes";
import axios from "axios";
import { baseAPI } from "../../../Shared/baseAPI";

// ----------MODAL WINDOW START-----------------------
const Modal = ({ card, closeModal, handleSubmit }) => (
  <div className="overlay">
    <div className="modal">
      <div className="modal_x" onClick={closeModal}>
        X
      </div>
      <h2>Записаться на курс</h2>
      <div className="modal_generalBlock">
        <div className="modal_inpBlock">
          <input className="modal_name" type="text" placeholder="Имя" />
          <input className="modal_surname" type="text" placeholder="Фамилия" />
          <input
            className="modal_number"
            type="text"
            placeholder="Номер телефона"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="modal_nameCourse">{card.name}</span>
          <span className="modal_descCourse">{card.description}</span>
        </div>
      </div>
      <button className="modal_btn" onClick={handleSubmit}>
        Отправить заявку
      </button>
    </div>
  </div>
);
// -----------------MODAL WINDOW END-------------------

const PaidCourseCard: React.FC<IProps> = ({ card }: IProps) => {
  // console.log(card);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // -----------FAVORITE START-----------------------
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    // Вызываем API-запрос для получения списка избранных курсов пользователя
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

        // Проверяем, есть ли текущий курс среди избранных
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

  // запрос добавление и удаление
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

      const response = await axios.post(
        `${baseAPI}/user/favorite/${action}/${card.id}`,
        {},
        config
      );

      if (response.status === 200) {
        const newIsFavorite = !isFavorite; // Инвертируем текущее состояние
        setIsFavorite(newIsFavorite);

        // console.log("Toggle favorite successful:", newIsFavorite);

        if (action === "add") {
          console.log("Успешно добавлен в избранное");
        } else if (action === "remove") {
          console.log("Успешно удалён из избранного");
        }
      } else {
        console.log("Toggle favorite unsuccessful:", response.statusText);
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      console.log("Response data:", error.response?.data);
      console.log("Response status:", error.response?.status);
    }
  };
  // -------------------FAVORITE END---------------------

  // ----------MODAL WINDOW START----------
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = () => {
    // Отправка данных на сервер
    closeModal();
  };
  //----------MODAL WINDOW END------------

  return (
    <div className="paidCourseCard">
      <div>
        <img
          className="paidCourseCard_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU"
          alt="Wait"
        />
        <img
          className={`paidCourseCard_imgHeart ${
            isFavorite ? "red-heart" : "gray-heart"
          }`}
          onClick={() => toggleFavorite()}
        />
      </div>
      <div className="paidCourseCard_infoBlock">
        <p className="paidCourseCard_start">{card.duration}</p>
        <span className="paidCourseCard_name">{card.name}</span>
        <span className="paidCourseCard_desc">{card.description}</span>
        <div className="paidCourseCard_priceBlock">
          <span className="paidCourseCard_priceLife">{card.price}</span>
          <span className="paidCourseCard_priceNo"></span>

          <button onClick={openModal} className="paidCourseCard_btn">
            Записаться
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          card={card}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default PaidCourseCard;
