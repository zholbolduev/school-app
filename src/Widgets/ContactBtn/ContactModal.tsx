import React from "react";
import "./ContactModal.scss"; // Создайте файл стилей для модального окна

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal_content">
        <h3>Свяжитесь с нами</h3>
        <input className="modal_content_name" placeholder="name" type="text" />
        <input
          className="modal_content_email"
          placeholder="email"
          type="text"
        />
        <button className="modal_content_btn">Связаться</button>
        <button className="modal_content_btn" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
