import { useParams } from "react-router";
import { FreeDetailsWidget } from "../../../Widgets/DetailsWidgets/FreeDetailsWidget";
import "./CourseVideoPage.scss";

const CourseVideoPage = () => {

  const { id } = useParams();

  console.log(id);
  return (
    <div className="course-details-page">
      <FreeDetailsWidget />
    </div>
  );
};

export default CourseVideoPage;
