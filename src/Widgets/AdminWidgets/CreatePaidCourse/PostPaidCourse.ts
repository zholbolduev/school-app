import axios from "axios";
import { AppDispatch } from "../../../App/rootStore";
import { createPaidCourseSlice } from "./CreatePaidCourseSlice";
import { baseAPI } from "../../../Shared/baseAPI";

export const postPaidCourse =
  (
    name: string,
    description: string,
    price: number,
    duration: number,
    lectureQuantity: number,
    courseDirection: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(createPaidCourseSlice.actions.setIsLoading());

      const newPaidCourse = {
        name,
        description,
        price,
        courseType: "PAID",
        duration,
        lectureQuantity,
        courseDirection,
      };

      await axios.post(
        `${baseAPI}/admin/course/paid/create`,
        newPaidCourse
      );

      dispatch(
        createPaidCourseSlice.actions.setSuccess(
          "Вы успешно создали курс"
        )
      );
    } catch (error: any) {
      console.log(error.message);
      dispatch(createPaidCourseSlice.actions.setError(error.message));
    }
  };
