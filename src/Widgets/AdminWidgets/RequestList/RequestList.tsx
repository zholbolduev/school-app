import "./RequestList.scss";
import { BsTrashFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import {
  downloadRequestList,
  getRequests,
} from "./RequestListActions";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/reduxHooks";
import { useEffect } from "react";
import { IRequest } from "./RequestListSlice";

const RequestList = () => {
  const dispatch = useAppDispatch();
  const { data: requests } = useAppSelector(
    (state) => state.requestListReducer
  );

  useEffect(() => {
    dispatch(getRequests());
  }, []);
  return (
    <div className="requestList">
      <div className="requestList__title">
        <h3>Список заявок</h3>
        <button onClick={downloadRequestList}>Скачать</button>
      </div>
      <div className="requestList__wrapper">
        <div className="requestList__header">
          <p></p>
          <p>ФИ</p>
          <p>Номер телефона</p>
          <p>Дата отправки</p>
          <p>Курс</p>
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

          <p className="requestList__item_course">2023-04-18</p>

          <div className="requestList__item_actions">
            <FiMoreHorizontal className="item__icon" />
            <BsTrashFill className="item__icon" />
          </div>
        </div>
        {requests.map((request: IRequest) => (
          <div key={request.id} className="requestList__item">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="avatar"
            />

            <div className="requestList__item_name">
              <p>{request.fullName}</p>
              <p>{request.fullName}</p>
            </div>

            <p className="requestList__item_number">
              {request.phoneNumber}
            </p>

            <p className="requestList__item_date">
              {request.dateOfCreation.slice(0, 10)}
            </p>

            <p className="requestList__item_course">
              {request.courseName}
            </p>

            <div className="requestList__item_actions">
              <FiMoreHorizontal className="item__icon" />
              <BsTrashFill className="item__icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestList;
