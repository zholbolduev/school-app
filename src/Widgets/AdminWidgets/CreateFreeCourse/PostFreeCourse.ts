import axios from "axios";
import { AppDispatch } from "../../../App/rootStore";
import { createFreeCourseSlice } from "./CreateFreeCourseSlice";
import { baseAPI } from "../../../Shared/baseAPI";

export const postFreeCourse =
  (
    name: string,
    description: string,
    duration: number,
    lectureQuantity: number,
    courseDirection: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(createFreeCourseSlice.actions.setIsLoading());

      const newFreeCourse = {
        name,
        description,
        courseType: "FREE",
        duration,
        lectureQuantity,
        courseDirection,
      };

      await axios.post(
        `${baseAPI}/admin/course/free/create`,
        newFreeCourse
      );

      dispatch(
        createFreeCourseSlice.actions.setSuccess(
          "Вы успешно создали курс"
        )
      );
    } catch (error: any) {
      dispatch(createFreeCourseSlice.actions.setError(error.message));
    }
  };
