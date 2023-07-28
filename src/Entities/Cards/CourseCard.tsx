import { Link } from "react-router-dom";
import "./CourseCard.scss";
import { IProps } from "./types";
import { FC } from "react";

const CourseCard: FC<IProps> = ({ card }: IProps) => {
  return (
    <div className="card">
      <div className="blockCard">
        <img className="photoCard" src={card.img} alt="image" />
        <Link to={`/course-free-details`}>
          <button className="btnCard">{card.title}</button>
        </Link>
        <div className="heart-icon" id="heartIcon"></div>
      </div>
      <p className="descCard">
        {card.description}
        Interpersonal skills - work better with others!
      </p>
      {card.price ? (
        <p className="priceCard">300C</p>
      ) : (
        <button>Перейти</button>
      )}
    </div>
  );
};

export default CourseCard;
