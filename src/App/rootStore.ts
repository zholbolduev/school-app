import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import newCourseReducer from "../Features/AddCourse/NewCourseSlice";
import { contactListApi } from "../Widgets/AdminWidgets/ConctactList/ContactListQuery";
import loginReducer from "../Features/AuthFeatures/LoginFeature/LoginFeatureSlice";
import registerReducer from "../Features/AuthFeatures/RegisterFeature/RegisterFeatureSlice";
import detailedCourseReducer from "../Widgets/DetailsWidgets/DetailedCourseSlice";
import courseReducer from "../Widgets/CoursesWidgets/PaidCoursesLIstWg/PaidCourseSliceWg";

const rootReducers = combineReducers({
  [contactListApi.reducerPath]: contactListApi.reducer,
  newCourseReducer,
  loginReducer,
  registerReducer,
  detailedCourseReducer,
  course: courseReducer, // Включите ваш courseReducer в корневой редюсер
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
