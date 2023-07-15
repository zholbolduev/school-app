import "./PaidCoursePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../App/rootStore";
import { useEffect } from "react";
import { fetchCourse } from "../../../Features/PaidCourse/PaidCourseSlice";

const PaidCoursePage = () => {
  const courseId = 123;

  const course = useSelector((state: RootState) => state.course?.data);
  const loading = useSelector((state: RootState) => state.course?.loading);
  const error = useSelector((state: RootState) => state.course?.error);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchCourse(courseId ? courseId : null));
    },
    [dispatch] /*courseId */
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Hello</h1>
      <div style={{ backgroundColor: "red" }}>PaidCoursePage</div>
      {course && (
        <div>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      )}
    </div>
  );
};

export default PaidCoursePage;
