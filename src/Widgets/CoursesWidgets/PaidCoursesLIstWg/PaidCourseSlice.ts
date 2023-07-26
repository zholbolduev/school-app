import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

interface PaidCourseData {
  name: string;
  description: string;
  duration: string;
  videos: number;
  start: string;
  price: number;
}

interface PaidCourseState {
  data: PaidCourseData | null;
  loading: boolean;
  error: string | null;
}

export const fetchCourse = createAsyncThunk<
  AxiosResponse<PaidCourseData>,
  number,
  {
    rejectValue: AxiosError<{ message: string }>;
  }
>("course/fetchCourse", async (courseId, { rejectWithValue }) => {
  try {
    const response = await axios.get<PaidCourseData>(`APIIIIIII`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

const PaidCourseSlice = createSlice({
  name: "course",
  initialState: { data: null, loading: false, error: null } as PaidCourseState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message || null;
      });
  },
});

export default PaidCourseSlice.reducer;
