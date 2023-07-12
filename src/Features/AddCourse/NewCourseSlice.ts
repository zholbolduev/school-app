import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface INewCourse {
  isLoading: boolean;
  response: string;
  error: string;
}

const initialState: INewCourse = {
  isLoading: true,
  response: "",
  error: "",
};

export const newCourseSlice = createSlice({
  name: "newCourseSlice",
  initialState,
  reducers: {
    setResponse(state, action: PayloadAction<string>) {
      state.response = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error, action.payload;
    },
  },
});

export default newCourseSlice.reducer;
