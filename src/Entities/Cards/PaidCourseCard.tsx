import "./PaidCourseCard.scss";
import { useState } from "react";
import { IProps } from "./types";
import { FC } from "react";
import photo from "./photo/pana.svg";

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

  return (
    <div className="P-block">
      <div>
        {" "}
        <img
          className="P-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU"
          alt="Wait"
        />
      </div>
      <div className="P-info">
        <p className="start-inf">18 Jule 2024</p>
        <span className="name-inf">PM course offline</span>
        <span className="desc-inf">
          Продукт мэнеджмент это что-то такое я не знаю короче просто
          описание типо чтото умное для студентов
        </span>
        <div className="inf">
          <span className="actPrice-inf">300</span>
          <span className="noPrice-inf">600</span>

          <button onClick={openModal} className="btn-inf">
            Записаться
          </button>
        </div>
      </div>
      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="x" onClick={closeModal}>
              X
            </div>
            <h2>Записаться на курс</h2>
            <div className="general">
              <div className="inps">
                <input
                  className="inp-name"
                  type="text"
                  placeholder="Имя"
                />
                <input
                  className="inp-surname"
                  type="text"
                  placeholder="Фамилия"
                />
                <input
                  className="inp-number"
                  type="text"
                  placeholder="Номер телефона"
                />
              </div>
              <div>
                {" "}
                <img className="photo" src={photo} alt="" />
              </div>
            </div>
            <button className="application" onClick={handleSubmit}>
              Отправить заявку
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaidCourseCard;
