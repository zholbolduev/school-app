import React, { useState } from "react";
import "./ContactBtn.scss";
import contactImg from "../../../src/Widgets/ContactBtn/assets/Group 29.svg";
import ContactModal from "./ContactModal"; // Импортируйте компонент модального окна

const ContactBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact">
      <div className="contact_container">
        <div>
          <img src={contactImg} alt="" />
        </div>
        <div>
          <h3 className="contact_container_question">Есть вопросы?</h3>
          <p className="contact_container_callMe">Свяжитесь с нами.</p>
          <button className="contact_container_btn" onClick={openModal}>
            Связаться
          </button>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ContactBtn;
