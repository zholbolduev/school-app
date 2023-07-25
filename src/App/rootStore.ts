import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newCourseReducer from "../Features/AddCourse/NewCourseSlice";
import courseReducer from "../Pages/Courses/PaidCoursePage/PaidCourseSlice/PaidCourseSlice";

const rootReducers = combineReducers({
  newCourseReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

// ====================DOSI================
const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});
// ====================DOSI===============

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
