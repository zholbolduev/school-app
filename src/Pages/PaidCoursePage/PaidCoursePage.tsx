import "./PaidCoursePage.scss";
import PaidCoursesListWg from "../../Widgets/CoursesWidgets/PaidCoursesLIstWg/PaidCoursesListWg";
import Banner from "../../Widgets/Banner/Banner";
import ContactBtn from "../../Widgets/ContactBtn/ContactBtn";

const PaidCoursePage = () => {
  return (
    <div>
      <Banner />
      <PaidCoursesListWg />
      <ContactBtn />
    </div>
  );
};

export default PaidCoursePage;
