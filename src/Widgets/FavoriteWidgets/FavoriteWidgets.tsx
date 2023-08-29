import React from "react";
import "./FavoriteWidgets.scss";
import { fetchCourse } from "./FavoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import PaidCourseCard from "../../Entities/Cards/PaidCourseCard/PaidCourseCard";

const FavoriteWidgets: React.FC = () => {
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourse());
  }, [dispatch]);

  const cards = course
    ? course.map((courseItem, index) => ({
        id: index + 1,
        title: courseItem.name,
        description: courseItem.description,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU",
        price: courseItem.price,
        type: "paid",
      }))
    : [];

  return (
    <div className="favorite">
      <h2>Избранное</h2>
      <div className="favorite__wrapper">
        {cards.map((cours) => (
          <PaidCourseCard key={cours.id} card={cours} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteWidgets;
