import React, { useState } from "react";
import "./ContactModal.scss";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`${baseAPI}/user/feedback`, { name, number });
      onClose();
      setName(""); // Очищаем поле имени
      setNumber(""); // Очищаем поле номера
    } catch (error) {
      console.error("Произошла ошибка при отправке запроса:", error);
    }
  };

  const handleOverlayClick = (e) => {
    // Закрываем модальное окно при клике на пустое место за его пределами
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal_content">
        <h3>Свяжитесь с нами</h3>
        <button className="modal_content_close" onClick={onClose}>
          ✕
        </button>
        <input
          className="modal_content_name"
          placeholder="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          className="modal_content_number"
          placeholder="number"
          type="text"
          value={number}
          onChange={handleNumberChange}
        />
        <button className="modal_content_btn" onClick={handleSubmit}>
          Связаться
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
