import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newCourseReducer from "../Features/AddCourse/NewCourseSlice";
import { contactListApi } from "../Widgets/AdminWidgets/ConctactList/ContactListQuery";
import freeCourseReducer from "../Widgets/FreeCourse/FreeCourseList/FreeCourseSlice";

const rootReducers = combineReducers({
  [contactListApi.reducerPath]: contactListApi.reducer,
  newCourseReducer,
  freeCourseReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(contactListApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
