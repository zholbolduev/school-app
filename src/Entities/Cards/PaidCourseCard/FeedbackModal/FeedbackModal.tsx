import React, { useState } from "react";
import axios from "axios";
import "./FeedbackModal.scss";
import "../PaidCourseCard.scss";
import { baseAPI } from "../../../../Shared/baseAPI";
import "../paidTypes";

const FeedbackModal = ({ card, closeModal }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async () => {
    try {
      const requestData = {
        id: card.id,
        fullName,
        phoneNumber,
        courseName: card.name,
      };

      const response = await axios.put(
        `${baseAPI}/user/subscribe/${card.id}`,
        requestData
      );

      if (response.status === 200) {
        console.log("Заявка успешно отправлена.");
      } else {
        console.log("Ошибка отправки заявки:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка отправки заявки:", error);
      console.log("Response data:", error.response?.data);
      console.log("Response status:", error.response?.status);
    } finally {
      closeModal();
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal_x" onClick={closeModal}>
          ✕
        </div>
        <h2>Записаться на курс</h2>
        <div className="modal_generalBlock">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "270px",
            }}
          >
            <span className="modal_nameCourse">{card.name}</span>
            <span className="modal_descCourse">{card.description}</span>
            <span className="modal_descCourse">
              {card.lectureQuantity} Лекции
            </span>
            <span className="modal_descCourse">{card.duration} Месяца</span>
            <span className="modal_descCourse">{card.price}сом в месяц</span>
          </div>
          <div className="modal_inpBlock">
            <input
              className="modal_name"
              type="text"
              placeholder="Имя"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="modal_surname"
              type="text"
              placeholder="Номер"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <button className="modal_btn" onClick={handleSubmit}>
          Отправить заявку
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
