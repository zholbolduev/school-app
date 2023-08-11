import React, { useEffect } from "react";
import CourseCard from "../../../Entities/Cards/CourseCard";
import "./PaidCourseListWg.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourse } from "./PaidCourseSliceWg";

const PaidCoursesListWg: React.FC = () => {
  const dispatch = useDispatch();

  const course = useSelector((state) => state.course); // Получаем состояние о курсе

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
    <div className="PaidCourseList">
      <h2>Расписание платных курсов</h2>
      <div className="freeCourseList__wrapper">
        {cards.map((cours) => (
          <CourseCard key={cours.id} card={cours} />
        ))}
      </div>
    </div>
  );
};

export default PaidCoursesListWg;
