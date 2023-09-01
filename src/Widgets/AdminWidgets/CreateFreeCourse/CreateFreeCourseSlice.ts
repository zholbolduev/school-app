import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFetch } from "../../../Shared/types";

const initialState: IFetch = {
  loading: false,
  data: [],
  error: "",
};

export const createFreeCourseSlice = createSlice({
  name: "createFreeCourseSlice",
  initialState,
  reducers: {
    setIsLoading(state) {
      state.loading = true;
    },
    setSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = "";
      state.success = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default createFreeCourseSlice.reducer;
