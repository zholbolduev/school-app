import axios from "axios";
import { AppDispatch } from "../../../App/rootStore";
import {
  IVideoLecture,
  videoLectureSlice,
} from "./VideoLectureSlice";
import { baseAPI } from "../../../Shared/baseAPI";
import { getDetailedCourse } from "../../DetailsWidgets/DetailedCourseActions";

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
  (lectureId: string, courseId: string | undefined) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(videoLectureSlice.actions.setLoading());

      await axios.delete(`${baseAPI}/l/v/delete/${lectureId}`);

      dispatch(getDetailedCourse(courseId));
    } catch (error) {
      console.log(error);
    }
  };

export const getCourseLectures =
  (courseVideoLectures: IVideoLecture) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(videoLectureSlice.actions.setLoading());

      const response = await axios.get<IVideoLecture[]>(
        `${baseAPI}/l/v/get/all`
      );

      const filtedVideoLectures = courseVideoLectures
        .filter(
          (item1: IVideoLecture) =>
            !response.data.some(
              (item2: IVideoLecture) => item1.id === item2.id
            )
        )
        .concat(
          response.data.filter(
            (item2: IVideoLecture) =>
              !courseVideoLectures.some(
                (item1: IVideoLecture) => item2.id === item1.id
              )
          )
        );

      dispatch(
        videoLectureSlice.actions.setData(filtedVideoLectures)
      );
    } catch (error: any) {
      dispatch(videoLectureSlice.actions.setError(error.message));
    }
  };
