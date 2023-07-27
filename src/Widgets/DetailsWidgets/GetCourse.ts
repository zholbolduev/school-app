import axios from "axios";
import { AppDispatch } from "../../App/rootStore";
import { baseAPI } from "../../Shared/baseAPI";
import { detailedCourseSlice } from "./DetailedCourseSlice";

export const getDetailedCourse = async (dispatch: AppDispatch, id: string) => {
    
    try {

        const response = await axios.get(`${baseAPI}/admin/course/get/${id}`);
        dispatch(detailedCourseSlice.actions.setCourse(response.data));

    } catch(error: any) {
        dispatch(detailedCourseSlice.actions.setError(error.toString));
    }
}