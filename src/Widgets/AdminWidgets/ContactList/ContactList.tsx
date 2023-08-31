import "./ContactList.scss";
import { BsTrashFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

const ContactList = () => {
  return (
    <div className="contactList">
      <h3>Список обращений</h3>
      <div className="contactList__wrapper">
        <div className="contactList__header">
          <p></p>
          <p>ФИ</p>
          <p>Номер телефона</p>
          <p>Дата отправки</p>
        </div>
        <div className="contactList__item">
          <img
            src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
          />

          <div className="contactList__item_name">
            <p>Пак</p>
            <p>Юлия</p>
          </div>

          <p className="contactList__item_number">
            +996 (501)-494-101
          </p>

          <p className="contactList__item_date">2023-04-18</p>

          <div className="contactList__item_actions">
            <FiMoreHorizontal className="item__icon" />
            <BsTrashFill className="item__icon" />
          </div>
        </div>
        <div className="contactList__item">
          <img
            src="https://images.pexels.com/photos/3290236/pexels-photo-3290236.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
          />

          <div className="contactList__item_name">
            <p>Елена</p>
            <p>Анатольевна</p>
          </div>

          <p className="contactList__item_number">
            +996 (501)-494-101
          </p>

          <p className="contactList__item_date">2023-04-18</p>

          <div className="contactList__item_actions">
            <FiMoreHorizontal className="item__icon" />
            <BsTrashFill className="item__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
