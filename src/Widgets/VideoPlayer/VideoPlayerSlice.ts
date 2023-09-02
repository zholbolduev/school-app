import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFetch } from "../../Shared/types";
import { IVideoLecture } from "../AdminWidgets/CreateVideoLecture/VideoLectureSlice";

const initialState: IFetch = {
  loading: false,
  data: {},
  error: "",
};

export const videoPlayerSlice = createSlice({
  name: "videoPlayerSlice",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setData(state, action: PayloadAction<IVideoLecture>) {
      state.data = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default videoPlayerSlice.reducer;
