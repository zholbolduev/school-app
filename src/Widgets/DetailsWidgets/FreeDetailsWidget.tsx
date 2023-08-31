import { Video } from "../../Entities/CourseDetailsEntities/Video/MainVideoPlayer";
import { VideoPlaylist } from "../../Entities/CourseDetailsEntities/Video/VideoPlaylist";
import { TestButton } from "../../Shared/Buttons/TestButton";
import { useAppSelector } from "../../Shared/hooks/reduxHooks";
import { useState, useEffect } from "react";
import { ICourseData } from "./DetailedCourseSlice";
import "./DetailsWidget.scss";
import { Description } from "../../Entities/CourseDetailsEntities/Description/Description";
import { RecomendedVideos } from "../../Entities/CourseDetailsEntities/Video/RecomendedVideos/RecomendedVideos";
import { Comments } from "../../Entities/CourseDetailsEntities/Comments/Comments";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseAPI } from "../../Shared/baseAPI";

export const FreeDetailsWidget = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState<ICourseData | null>(
    null
  );

  const data = useAppSelector(
    (state) => state.detailedCourseReducer.course
  );

  useEffect(() => {
    setCourseData(data);
  }, [data]);

  const [freeCourse, setFreeCourse] = useState<any>({
    name: "",
    description: "",
  });

  const { id } = useParams();

  const getFreeCourse = async () => {
    const response = await axios.get(
      `${baseAPI}/user/course/get/${id}`
    );

    setFreeCourse(response.data);
  };

  useEffect(() => {
    getFreeCourse();
  }, []);

  return (
    <div className="details-container">
      <div className="details-top">
        <h1>{freeCourse.name}</h1>

        <button onClick={() => navigate(`/course-free-edit/${id}`)}>
          edit
        </button>
      </div>
      <div className="details-center-container">
        <Video />
        <div className="details-playlist">
          <h3>Другие видео курса</h3>
          <VideoPlaylist />
        </div>
      </div>
      <div className="details-bottom-container">
        <div className="details-description">
          <Description description={freeCourse.description} />
          <div className="details-buttons">
            <Link className="details-link" to={"/text-lecture"}>
              Текстовая лекция
            </Link>
            <TestButton />
          </div>
          <hr />
          <Comments currentUserId="1" />
        </div>
        <div className="recomendedVideos">
          <h3>Рекомендации</h3>
          <RecomendedVideos />
        </div>
      </div>
    </div>
  );
};
