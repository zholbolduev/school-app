import React, { useEffect } from "react";
import "./PaidCourseListWg.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "./PaidCourseSliceWg";
import PaidCourseCard from "../../../Entities/Cards/PaidCourseCard/PaidCourseCard";

const PaidCoursesListWg: React.FC = () => {
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourse());
  }, [dispatch]);

  const cards = course
    ? course.map((courseItem, index) => ({
        id: courseItem.id,
        name: courseItem.name,
        description: courseItem.description,
        duration: courseItem.duration,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU",
        price: courseItem.price,
      }))
    : [];

  return (
    <div className="PaidCourseList">
      <h2>Платные курсы</h2>
      <div className="freeCourseList__wrapper">
        {cards.map((cours) => (
          <PaidCourseCard key={cours.id} card={cours} />
        ))}
      </div>
    </div>
  );
};

export default PaidCoursesListWg;
