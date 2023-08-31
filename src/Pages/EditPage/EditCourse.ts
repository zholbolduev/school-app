import axios from "axios";
import { AppDispatch } from "../../App/rootStore";
import { editCourseSlice } from "./EditCourseSlice";
import { baseAPI } from "../../Shared/baseAPI";

export const editCourse =
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
      const editedCourse = {
        name,
        description,
        courseType,
        duration,
        lectureQuantity,
        courseDirection,
      };

      const response = await axios.put(
        `${baseAPI}/admin/course/free/update`,
        editedCourse
      );

      dispatch(editCourseSlice.actions.setResponse(response.data));
    } catch (error: any) {
      dispatch(editCourseSlice.actions.setError(error.message));
      console.log(error.message);
    }
  };
