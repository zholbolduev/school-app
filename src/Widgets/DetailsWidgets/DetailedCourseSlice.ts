import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetch } from "../../Shared/types";

export interface ICourseData {
  id: number;
  name: string;
  description: string;
  courseType: string;
  lectures: string[];
  videoLectures: string[];
  lectureQuantity: number;
  duration: number;
  courseDirection: string;
  file: string;
}

const initialState: IFetch = {
  loading: false,
  data: {
    id: 0,
    name: "",
    description: "",
    courseType: "",
    lectures: [],
    videoLectures: [],
    lectureQuantity: 0,
    duration: 0,
    courseDirection: "",
    file: "",
  },
  success: "",
  error: "",
};

export const detailedCourseSlice = createSlice({
  name: "detailedCourseSlice",
  initialState,
  reducers: {
    setIsLoading(state) {
      state.loading = true;
    },
    setData(state, action: PayloadAction<ICourseData>) {
      state.error = "";
      state.loading = false;
      state.data = action.payload;
    },
    setSuccess(state, action: PayloadAction<string>) {
      state.success = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default detailedCourseSlice.reducer;
