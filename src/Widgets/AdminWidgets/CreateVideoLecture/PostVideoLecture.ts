import axios from "axios";
import { AppDispatch } from "../../../App/rootStore";
import {
  IVideoLecture,
  videoLectureSlice,
} from "./VideoLectureSlice";
import { baseAPI } from "../../../Shared/baseAPI";

export const postVideoLecture =
  (title: string, description: string, link: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(videoLectureSlice.actions.setLoading());

      const videoLecture = {
        title,
        description,
        link,
      };

      await axios.post(`${baseAPI}/l/v/create`, videoLecture);

      dispatch(
        videoLectureSlice.actions.setSuccess(
          "Вы успешно создали видео-лекцию"
        )
      );
    } catch (error: any) {
      dispatch(videoLectureSlice.actions.setError(error.message));
    }
  };

export const deleteVideoLecture =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(videoLectureSlice.actions.setLoading());

      await axios.delete(`${baseAPI}/l/v/delete/${id}`);

      dispatch(getCourseLectures());
    } catch (error) {
      console.log(error);
    }
  };

export const getCourseLectures =
  () => async (dispatch: AppDispatch) => {
    try {
      dispatch(videoLectureSlice.actions.setLoading());

      const response = await axios.get<IVideoLecture[]>(
        `${baseAPI}/l/v/get/all`
      );

      dispatch(videoLectureSlice.actions.setData(response.data));
    } catch (error: any) {
      dispatch(videoLectureSlice.actions.setError(error.message));
    }
  };
