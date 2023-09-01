import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import loginReducer from "../Features/AuthFeatures/LoginFeature/LoginFeatureSlice";
import registerReducer from "../Features/AuthFeatures/RegisterFeature/RegisterFeatureSlice";
import detailedCourseReducer from "../Widgets/DetailsWidgets/DetailedCourseSlice";
import courseReducer from "../Widgets/CoursesWidgets/PaidCoursesLIstWg/PaidCourseSliceWg";
import createFreeCourseReducer from "../Widgets/AdminWidgets/CreateFreeCourse/CreateFreeCourseSlice";
import createPaidCourseReducer from "../Widgets/AdminWidgets/CreatePaidCourse/CreatePaidCourseSlice";
import videoLectureReducer from "../Widgets/AdminWidgets/CreateVideoLecture/VideoLectureSlice";
import videoPlayerReducer from "../Widgets/VideoPlayer/VideoPlayerSlice";
import contactListReducer from "../Widgets/AdminWidgets/ContactList/ContactListSlice";
import requestListReducer from "../Widgets/AdminWidgets/RequestList/RequestListSlice";

const rootReducers = combineReducers({
  loginReducer,
  registerReducer,
  detailedCourseReducer,
  course: courseReducer,
  createFreeCourseReducer,
  createPaidCourseReducer,
  videoLectureReducer,
  videoPlayerReducer,
  contactListReducer,
  requestListReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
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
