import { IFreeCourse } from "./FreeCourse.types";
import { Link } from "react-router-dom";
import "./CourseCard.scss";
import React from "react";

export const CourseCard: React.FC<IFreeCourse> = ({ id, title, duration, videos, isFavorite }) => {

    return (
        <div className="courseCard">
            <Link to={ id } >
                <div className="courseCard-details">
                    <div className="courseCard-title">
                        <h3>{ title }</h3>
                    </div>
                    <div className="courseCard-details">
                        <span>Продолжительность курса:{ duration }</span>
                        <span>{ videos } видео лекций</span>
                    </div>
                </div>
            </Link>
            <div className={`courseCard-favorite ${ isFavorite && 'favortie-active' }`}>
                <button>Favorite</button>
            </div>
        </div>
    );
}