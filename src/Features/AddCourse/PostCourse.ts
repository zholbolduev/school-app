import axios from "axios";
import { AppDispatch } from "../../App/rootStore";
import { newCourseSlice } from "./NewCourseSlice";
import { baseAPI } from "../../Shared/baseAPI";

export const postCourse =
  (
    name: string,
    description: string,
    courseType: string,
    duration: number,
    lectureQuantity: number,
    courseDirection: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      const newCourse = {
        name,
        description,
        courseType,
        duration,
        lectureQuantity,
        courseDirection,
      };

      console.log(newCourse)

      const a = {
        name: "молоко",
        description: "fromnt dev is",
        // "price": 11230.0,
        courseType: "FREE",
        duration: 990,
        lectureQuantity: 10,
        courseDirection: "MOBILE",
      };

      const response = await axios.post(
        `${baseAPI}/admin/course/free/create`,
        a
      );

      dispatch(newCourseSlice.actions.setResponse(response.data));
    } catch (error: any) {
      dispatch(newCourseSlice.actions.setError(error.message));
      console.log(error.message);
    }
  };
