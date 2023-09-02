import React from "react";
// import CourseCard from "../../../Entities/Cards/CourseCard";
import "./FreeCourseList.scss";
import FreeCourseCard from "../../../Entities/Cards/FreeCourseCard/FreeCourseCard";
import axios from "axios";
import { IFreeCard } from "../../../Entities/Cards/FreeCourseCard/types";
import { baseAPI } from "../../../Shared/baseAPI";
import { useEffect, useState } from "react";

const FreeCoursesList: React.FC = () => {
  const [courses, setCourses] = useState<IFreeCard[]>([]);

  const getCourses = async () => {
    const response = await axios.get<IFreeCard[]>(
      `${baseAPI}/user/course/free/get/all`
    );
    setCourses(response.data);

    console.log(response.data)
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="freeCourseList">
      <h2>Бесплатные курсы</h2>
      <div className="freeCourseList__wrapper">
        {courses.map((course) => (
          <FreeCourseCard
            id={course.id}
            key={course.id}
            name={course.name}
            description={course.description}
            img={course.img}
          />
        ))}
      </div>
    </div>
  );
};

export default FreeCoursesList;
