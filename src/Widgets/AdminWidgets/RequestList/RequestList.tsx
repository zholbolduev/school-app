import "./RequestList.scss";
import { BsTrashFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

const RequestList = () => {
  return (
    <div className="requestList">
      <h3>Список заявок</h3>
      <div className="requestList__wrapper">
        <div className="requestList__header">
          <p></p>
          <p>ФИ</p>
          <p>Номер телефона</p>
          <p>Дата отправки</p>
        </div>
        <div className="requestList__item">
          <img
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
          />

          <div className="requestList__item_name">
            <p>Lebron</p>
            <p>James</p>
          </div>

          <p className="requestList__item_number">
            +996 (501)-494-101
          </p>

          <p className="requestList__item_date">2023-04-18</p>

          <div className="requestList__item_actions">
            <FiMoreHorizontal className="item__icon" />
            <BsTrashFill className="item__icon" />
          </div>
        </div>
        <div className="requestList__item">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
          />

          <div className="requestList__item_name">
            <p>Алибек</p>
            <p>Сыдыгалиев</p>
          </div>

          <p className="requestList__item_number">
            +996 (501)-494-101
          </p>

          <p className="requestList__item_date">2023-04-18</p>

          <div className="requestList__item_actions">
            <FiMoreHorizontal className="item__icon" />
            <BsTrashFill className="item__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestList;
