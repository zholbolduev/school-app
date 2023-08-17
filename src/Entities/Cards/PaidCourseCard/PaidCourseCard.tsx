import "./PaidCourseCard.scss";
import { useState } from "react";
import { IProps } from "./paidTypes";
import { FC } from "react";
import axios from "axios";

const PaidCourseCard: FC<IProps> = ({ card }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = isModalOpen ? "auto" : "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = isModalOpen ? "auto" : "hidden";
  };

  const handleSubmit = () => {
    // функция будет
    // отправка данных на сервер
    closeModal();
  };

  // --------------FAVORITE---------------------

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = async () => {
    try {
      const response = await axios.post("/favorite", {
        action: isFavorite ? "remove" : "add",
      });
      const newIsFavorite = response.data.isFavorite;
      setIsFavorite(newIsFavorite);
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <div className="paidCourseCard">
      <div>
        {" "}
        <img
          className="paidCourseCard_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU"
          alt="Wait"
        />
        <img
          className={`paidCourseCard_imgHeart ${
            isFavorite ? "red-heart" : "gray-heart"
          }`}
          onClick={toggleFavorite}
        />
      </div>
      <div className="paidCourseCard_infoBlock">
        <p className="paidCourseCard_start">18 Jule 2024</p>
        <span className="paidCourseCard_name">PM course offline</span>
        <span className="paidCourseCard_desc">
          Продукт мэнеджмент это что-то такое я не знаю короче просто описание
          типо чтото умное для студентов Продукт мэнеджмент это что-то такое я
          не знаю короче просто описание типо
        </span>
        <div className="paidCourseCard_priceBlock">
          <span className="paidCourseCard_priceLife">300</span>
          <span className="paidCourseCard_priceNo">600</span>

          <button onClick={openModal} className="paidCourseCard_btn">
            Записаться
          </button>
        </div>
      </div>
      {/* Модальное окно */}
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <div className="modal_x" onClick={closeModal}>
              X
            </div>
            <h2>Записаться на курс</h2>
            <div className="modal_generalBlock">
              <div className="modal_inpBlock">
                <input className="modal_name" type="text" placeholder="Имя" />
                <input
                  className="modal_surname"
                  type="text"
                  placeholder="Фамилия"
                />
                <input
                  className="modal_number"
                  type="text"
                  placeholder="Номер телефона"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="modal_nameCourse">JS</span>
                <span className="modal_descCourse">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores quasi quam, possimus fuga autem distinctio vel.
                  Molestiae iusto, exercitationem nam consequatur saepe debitis
                  dignissimos. Consequatur distinctio corrupti nobis aut dolor.
                </span>
              </div>
            </div>
            <button className="modal_btn" onClick={handleSubmit}>
              Отправить заявку
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaidCourseCard;
