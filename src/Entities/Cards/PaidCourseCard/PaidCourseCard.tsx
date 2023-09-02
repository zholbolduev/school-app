import React, { useState } from "react";
import { IProps } from "./paidTypes";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import FeedbackModal from "./FeedbackModal/FeedbackModal";

const PaidCourseCard: React.FC<IProps> = ({ card }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="paidCourseCard">
      <div>
        <img
          className="paidCourseCard_img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU"
          alt="Wait"
        />
        <FavoriteButton card={card} />
      </div>
      <div className="paidCourseCard_infoBlock">
        <span className="paidCourseCard_name">{card.name}</span>
        <span className="paidCourseCard_desc">{card.description}</span>
        <span className="paidCourseCard_start">{card.duration} месяц</span>
        <div className="paidCourseCard_priceBlock">
          <span className="paidCourseCard_priceLife">{card.price}</span>
          <button onClick={openModal} className="paidCourseCard_btnC">
            Записаться
          </button>
        </div>
      </div>
      {isModalOpen && (
        <FeedbackModal
          card={card}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default PaidCourseCard;
