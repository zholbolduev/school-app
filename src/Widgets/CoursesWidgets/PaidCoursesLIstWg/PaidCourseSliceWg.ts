import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../../../App/rootStore";
import { baseAPI } from "../../../Shared/baseAPI";

interface CourseData {
  name: string;
  description: string;
  price: number;
  duration: number;
  lectureQuantity: number;
  courseDirection: string;
  id?: number;
}

const initialState: CourseData | null = null;

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action: PayloadAction<CourseData>) => {
      return action.payload;
    },
    clearCourse: (state) => {
      return null;
    },
  },
});

export const { setCourse, clearCourse } = courseSlice.actions;

export default courseSlice.reducer;

// -------------------REQUEST-----------------------

export const fetchCourse = (): AppThunk => async (dispatch) => {
  try {
    const response = await axios.get<CourseData>(
      `${baseAPI}/user/course/paid/get/all`
    );
    console.log(response.data);
    dispatch(setCourse(response.data));
  } catch (error) {
    console.error("Ошибка при получении данных о курсе:", error);
    dispatch(setCourse(null));
  }
};
