import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newCourseReducer from "../Features/AddCourse/NewCourseSlice";
<<<<<<< HEAD
import courseReducer from "../Pages/Courses/PaidCoursePage/PaidCourseSlice/PaidCourseSlice";
=======
import { contactListApi } from "../Widgets/AdminWidgets/ConctactList/ContactListQuery";
>>>>>>> 33c4771a5bbb3cf0ec421d96af26f3a2bd88452e

const rootReducers = combineReducers({
  newCourseReducer,
  [contactListApi.reducerPath]: contactListApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(contactListApi.middleware),
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
