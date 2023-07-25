import axios from "axios";
import { AppDispatch } from "../../App/rootStore";
import { newCourseSlice } from "./NewCourseSlice";

export const PostCourse = () => async (dispatch: AppDispatch) => {
  try {
    const course = new FormData();

    const response = await axios.post("", course);

    dispatch(newCourseSlice.actions.setResponse(response.data));
  } catch (error: any) {
    dispatch(newCourseSlice.actions.setError(error.message));
  }
};
