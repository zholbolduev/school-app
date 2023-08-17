import { useEffect, useState } from "react";
import CourseCard from "../../Entities/Cards/CourseCard";
import FreeCourseCard from "../../Entities/Cards/FreeCourseCard/FreeCourseCard";
import "./RecommendList.scss";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";
import { IFreeCard } from "../../Entities/Cards/FreeCourseCard/types";

const RecommendList = () => {
  const [courses, setCourses] = useState<IFreeCard[]>([]);

  const getCourses = async () => {
    const response = await axios.get<IFreeCard[]>(
      `${baseAPI}/user/course/get/all`
    );
    setCourses(response.data);

    console.log(response.data);
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="recommendList">
      <div className="recommendList__wrapper">
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

export default RecommendList;
