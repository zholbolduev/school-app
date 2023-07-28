import axios from "axios";
import { AppDispatch } from "../../App/rootStore";
import { newCourseSlice } from "./NewCourseSlice";
import { baseAPI } from "../../Shared/baseAPI";

export const postCourse =
  (
    name: string,
    description: string,
    courseType: number,
    duration: number,
    lectureQuantity: number
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      const course = new FormData();

      course.append("name", name);
      course.append("description", description);
      course.append("courseType", courseType.toString());
      course.append("duration", duration.toString());
      course.append("lectureQuantity", lectureQuantity.toString());

      console.log(
        name,
        description,
        courseType,
        duration,
        lectureQuantity
      );

      const response = await axios.post(
        `${baseAPI}/admin/course/create`,
        course,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Указываем правильный заголовок для FormData
          },
        }
      );

      console.log(response.data);
      dispatch(newCourseSlice.actions.setResponse(response.data));
    } catch (error: any) {
      dispatch(newCourseSlice.actions.setError(error.message));
    }
  };
