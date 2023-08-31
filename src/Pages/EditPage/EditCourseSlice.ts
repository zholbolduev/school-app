import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IEditCourse {
  isLoading: boolean;
  response: string;
  error: string;
}

const initialState: IEditCourse = {
  isLoading: true,
  response: "",
  error: "",
};

export const editCourseSlice = createSlice({
  name: "editCourseSlice",
  initialState,
  reducers: {
    setResponse(state, action: PayloadAction<string>) {
      state.response = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export default editCourseSlice.reducer;
