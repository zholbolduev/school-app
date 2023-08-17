import "./FreeCourseCard.scss";
import heart from "./assets/heart.svg";
import { FC } from "react";
import { IFreeCard } from "./types";
import { useNavigate } from "react-router";

const FreeCourseCard: FC<IFreeCard> = ({
  name,
  description,
  img,
  id,
}: IFreeCard) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/course-free-details/${id}`)}
      className="freeCourseCard"
    >
      <div className="freeCourseCard__img">
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
      </div>
    </div>
  );
};

export default FreeCourseCard;
