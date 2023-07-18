import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newCourseReducer from "../Features/AddCourse/NewCourseSlice";
import freeCourseReducer from "../Widgets/FreeCourse/FreeCourseList/FreeCourseSlice";

const rootReducers = combineReducers({
  newCourseReducer,
  freeCourseReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
