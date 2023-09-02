import Banner from "../../Widgets/Banner/Banner";
import ContactBtn from "../../Widgets/ContactBtn/ContactBtn";
import FreeCoursesList from "../../Widgets/CoursesWidgets/FreeCoursesList/FreeCoursesList";
import "./FreeCoursePage.scss";

const FreeCoursePage = () => {
  return (
    <div>
      <Banner />
      <FreeCoursesList />
      <ContactBtn />
    </div>
  );
};

export default FreeCoursePage;
