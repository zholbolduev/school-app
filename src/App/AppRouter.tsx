import { Route, Routes } from "react-router";
import LandingPage from "../Pages/LandingPage/LandingPage";
import AdminPage from "../Pages/AdminPage/AdminPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import CoursesTimetablePage from "../Pages/Courses/CoursesTimetablePage/CoursesTimetablePage";
import FreeCoursePage from "../Pages/Courses/FreeCoursePage/FreeCoursePage";
import PaidCoursePage from "../Pages/Courses/PardCoursePage/PaidCoursePage";
import CourseVideoPage from "../Pages/Courses/CourseVideoPage/CourseVideoPage";
import RegisterPage from "../Pages/Auth/RegisterPage/RegisterPage";
import LoginPage from "../Pages/Auth/LoginPage/LoginPage";
import ForgotPasswordPage from "../Pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route
        path="/courses-timetable"
        element={<CoursesTimetablePage />}
      />
      <Route path="/course-free" element={<FreeCoursePage />} />
      <Route path="/course-paid" element={<PaidCoursePage />} />
      <Route
        path="/course-video-page"
        element={<CourseVideoPage />}
      />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route
        path="/forgot-password-page"
        element={<ForgotPasswordPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
