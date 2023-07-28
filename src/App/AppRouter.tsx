import { Navigate, Route, Routes } from "react-router";
import AdminPage from "../Pages/AdminPage/AdminPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import RegisterPage from "../Pages/Auth/RegisterPage/RegisterPage";
import LoginPage from "../Pages/Auth/LoginPage/LoginPage";
import ForgotPasswordPage from "../Pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import AddCourse from "../Features/AddCourse/AddCourse";
import AdminCommentList from "../Widgets/AdminWidgets/AdminCommentList/AdminCommentList";
import ContactList from "../Widgets/AdminWidgets/ConctactList/ContactList";
import RequestList from "../Widgets/AdminWidgets/RequestList/RequestList";
import AdminContactList from "../Widgets/AdminWidgets/AdminConctactList/AdminContactList";
import AdminRequestList from "../Widgets/AdminWidgets/AdminRequestList/AdminRequestList";
import FreeCourseCard from "../Entities/Cards/CourseCard";
import HomePage from "../Pages/HomePage/HomePage";
import AppLayout from "./AppLayout";
import PaidCoursePage from "../Pages/PaidCoursePage/PaidCoursePage";

const AppRouter = () => {
  const courseId = 1;

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-page/*" element={<AdminPage />}>
          <Route index element={<Navigate to="create-course" />} />
          <Route path="create-course" element={<AddCourse />} />
          <Route path="comment-list" element={<AdminCommentList />} />
          <Route path="contact-list" element={<ContactList />} />
          <Route path="request-list" element={<RequestList />} />
          <Route path="contact-list" element={<AdminContactList />} />
          <Route path="request-list" element={<AdminRequestList />} />
        </Route>
        <Route path="/profile-page" element={<ProfilePage />} />
        {/* <Route path="/course-free" element={<FreeCoursePage />} /> */}
        <Route path="/course-paid" element={<PaidCoursePage />} />
        {/* <Route path="/course-video-page/:id" element={<CourseVideoPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/login-page" element={<LoginPage />} />

      <Route path="/courrr" element={<FreeCourseCard courseId={courseId} />} />

      <Route path="/forgot-password-page" element={<ForgotPasswordPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/forgot-password-page" element={<ForgotPasswordPage />} />
    </Routes>
  );
};

export default AppRouter;
