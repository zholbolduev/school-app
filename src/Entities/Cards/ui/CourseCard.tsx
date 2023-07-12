import { CourseCardProps } from "../model/types/CourseCard.types";
import { Link } from "react-router-dom";

export const CourseCard = ({ title, duration, videos, isFavorite, to}: CourseCardProps) => {

    return (
        <div className="courseCard">
            <Link to={ to } >
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