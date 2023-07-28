import "./PaidCoursePage.scss";
import PaidCoursesListWg from "../../Widgets/CoursesWidgets/PaidCoursesLIstWg/PaidCoursesListWg";
import Banner from "../../Widgets/Banner/Banner";

const PaidCoursePage = () => {
  return (
    <div>
      <Banner />
      <PaidCoursesListWg />
    </div>
  );
};

export default PaidCoursePage;
