import {
  IFreeCourseState,
  IFreeCourse,
} from "../../../Entities/Courses/Cards/FreeCards/FreeCourse.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IFreeCourseState = {
  courses: [],
  loading: false,
  error: "",
};

const freeCoursesSlice = createSlice({
  name: "freeCourses",
  initialState,
  reducers: {
    freeCoursesPending: (state) => {
      state.loading = true;
    },

    freeCoursesFulfilled: (state, action: PayloadAction<IFreeCourse[]>) => {
      state.courses = action.payload;
      state.loading = false;
      state.error = "";
    },

    freeCoursesRejected: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  freeCoursesPending: getFreeCoursesPending,
  freeCoursesFulfilled: getFreeCoursesFulfilled,
  freeCoursesRejected: getFreeCoursesRejected,
} = freeCoursesSlice.actions;
export default freeCoursesSlice.reducer;

// --------------------------

// import { createSlice } from "@reduxjs/toolkit";

// export interface IFreeCourse {
//   title: string;
//   duration: string;
//   videos: number;
//   isFavorite: boolean;
//   to: string;
// }

// const initialState: IFreeCourse[] = [
//   {
//     title: "Физика",
//     duration: "1 месяц",
//     videos: 8,
//     isFavorite: false,
//     to: "/physics",
//   },
// ];

// export const freeCourseSlice = createSlice({
//   name: "freeCourseSlice",
//   initialState: initialState,
//   reducers: {},
// });

// export default freeCourseSlice.reducer;
