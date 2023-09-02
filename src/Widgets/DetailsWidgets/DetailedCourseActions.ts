import axios from "axios";
import { AppDispatch } from "../../App/rootStore";
import { baseAPI } from "../../Shared/baseAPI";
import { detailedCourseSlice } from "./DetailedCourseSlice";

export const getDetailedCourse =
  (id: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      dispatch(detailedCourseSlice.actions.setIsLoading());
      const response = await axios.get(
        `${baseAPI}/user/course/free/get/${id}`
      );
      dispatch(detailedCourseSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(detailedCourseSlice.actions.setError(error.message));
    }
  };

export const patchFreeCourse =
  (
    id: string | undefined,
    name: string,
    description: string,
    lectureQuantity: number
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(detailedCourseSlice.actions.setIsLoading());

      const editedCourse = { id, name, description, lectureQuantity };

      await axios.put(
        `${baseAPI}/admin/course/free/update`,
        editedCourse
      );

      dispatch(
        detailedCourseSlice.actions.setSuccess(
          "Вы успешны отредактировали курс"
        )
      );
    } catch (error: any) {
      dispatch(detailedCourseSlice.actions.setError(error.message));
    }
  };
