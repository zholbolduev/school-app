import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import newCourseReducer from "../Features/AddCourse/NewCourseSlice";
import { contactListApi } from "../Widgets/AdminWidgets/ConctactList/ContactListQuery";
import courseReducer from "../Widgets/CoursesWidgets/FreeCoursesListWg/FreeCourseSliceWg";
import freeCourseReducer from "../Widgets/CoursesWidgets/FreeCoursesListWg/FreeCourseSliceWg";
import loginReducer from "../Features/AuthFeatures/LoginFeature/LoginFeatureSlice";
import registerReducer from "../Features/AuthFeatures/RegisterFeature/RegisterFeatureSlice";

const rootReducers = combineReducers({
  [contactListApi.reducerPath]: contactListApi.reducer,
  newCourseReducer,
  /*freeCourseReducer*/
  course: courseReducer,
  freeCourseReducer,
  course: courseReducer,
  loginReducer,
  registerReducer,
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
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
