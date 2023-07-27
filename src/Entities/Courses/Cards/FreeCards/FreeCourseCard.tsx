import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCourse,
  clearCourse,
} from "../../../../Widgets/CoursesWidgets/FreeCoursesListWg/FreeCourseSliceWg";
import { RootState } from "../../../../App/rootStore";
import { Link } from "react-router-dom";

export const FreeCourseCard: React.FC<{ courseId: number }> = ({
  courseId,
}) => {
  const course = useSelector((state: RootState) => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourse(courseId));

    return () => {
      dispatch(clearCourse());
    };
  }, [courseId, dispatch]);

  // if (!course) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div className="courses-page">
        <Link /* key={course.id} */ to={`/courses-free-det`}>
          {" "}
          {/*  ${course.id}   */}
          {/* <h2>{course.name}</h2>
      <p>{course.description}</p>
      <p>Duration: {course.duration}</p>
      <p>Videos: {course.videos}</p>
      <p>Start Date: {course.start}</p>
      <p>Price: ${course.price}</p> */}
          <div
            style={{ width: "200px", height: "200px", backgroundColor: "red" }}
          >
            click
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FreeCourseCard;
