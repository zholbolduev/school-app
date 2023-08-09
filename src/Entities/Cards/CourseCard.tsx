import { useState } from "react";
import { Link } from "react-router-dom";
import "./CourseCard.scss";
import { IProps } from "./types";
import { FC } from "react";

const CourseCard: FC<IProps> = ({ card }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    // функция будет
    // отправка данных на сервер
    closeModal();
  };
  return (
    <div className="card">
      <div className="blockCard">
        <img className="photoCard" src={card.img} alt="image" />
        {card.price ? (
          <button className="btnCard" onClick={openModal}>
            {card.title}
          </button>
        ) : (
          <Link to={`/course-free-details`}>
            <button className="btnCard">{card.title}</button>
          </Link>
        )}
        <div className="heart-icon" id="heartIcon"></div>
      </div>
      <p className="descCard">
        {card.description}
        Interpersonal skills - work better with others!
      </p>
      {card.price ? <p className="priceCard">{card.price}с</p> : null}

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            {/* Здесь что то будет */}
            <h2>Заявка на курс</h2>
            <p>Введите свои данные:</p>
            <input type="text" placeholder="ФИО" />
            <input type="text" placeholder="Номер телефона" />
            <button onClick={handleSubmit}>Отправить заявку</button>
            <button onClick={closeModal}>Отмена</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
