import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";
import { AppDispatch } from "../../App/rootStore";
import { getCourseLectures } from "../AdminWidgets/CreateVideoLecture/PostVideoLecture";

export const mergeVideoLecture = async (
  courseId: string | undefined,
  lectureId: string
) => {
  try {
    await axios.put(
      `${baseAPI}/admin/course/lecture/v/add/${courseId}/${lectureId}`
    );
  } catch (error: any) {
    console.log(error.message);
  }
};
