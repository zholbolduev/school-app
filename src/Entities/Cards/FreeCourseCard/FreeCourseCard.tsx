import "./FreeCourseCard.scss";
import heart from "./assets/heart.svg";
import { FC } from "react";
import { IFreeCard } from "./types";
import { useNavigate } from "react-router";
import axios from "axios";
import { baseAPI } from "../../../Shared/baseAPI";

const FreeCourseCard: FC<IFreeCard> = ({
  name,
  description,
  img,
  id,
}: IFreeCard) => {
  const navigate = useNavigate();

  const getCourses = async () => {
    await axios.get<IFreeCard[]>(
      `${baseAPI}/user/course/free/get/all?courseType=FREE`
    );
  };

  const deleteCard = async (id: number) => {
    await axios.delete(`${baseAPI}/admin/course/delete/${id}`);
    getCourses();
  };
  return (
    <div className="freeCourseCard">
      <div
        onClick={() => navigate(`/course-free-details/${id}`)}
        className="freeCourseCard__img"
      >
        {img ? (
          <img src={img} alt="img" />
        ) : (
          <div className="freeCourseCard__img_img"></div>
        )}
        <div className="freeCourseCard__img_favorite">
          <div>
            <img src={heart} alt="heart" />
          </div>
        </div>
      </div>
      <div className="freeCourseCard__text">
        <span>{name}</span>
        <p>{description}</p>
        <button onClick={() => deleteCard(id)}>delete</button>
      </div>
    </div>
  );
};

export default FreeCourseCard;
