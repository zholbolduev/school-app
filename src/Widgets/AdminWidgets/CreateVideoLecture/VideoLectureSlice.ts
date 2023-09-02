import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFetch } from "../../../Shared/types";

const initialState: IFetch = {
  loading: false,
  success: "",
  data: [],
  error: "",
};

export interface IVideoLecture {
  id: string;
  title: string;
  description: string;
  link: string;
}

export const videoLectureSlice = createSlice({
  name: "videoLectureSlice",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = "";
      state.success = action.payload;
    },
    setData(state, action: PayloadAction<IVideoLecture[]>) {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default videoLectureSlice.reducer;
