import "./VideoLecturesPopUp.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../Shared/hooks/reduxHooks";
import { getCourseLectures } from "../AdminWidgets/CreateVideoLecture/PostVideoLecture";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { IVideoLecture } from "../AdminWidgets/CreateVideoLecture/VideoLectureSlice";
import { RxCrossCircled } from "react-icons/rx";
import { mergeVideoLecture } from "./VideoLecturesAction";

interface IVideoLecturesPopUpProps {
  setPopUp: (boolean: boolean) => void;
  courseVideoLectures: IVideoLecture;
  courseId: string | undefined;
}

const VideoLecturesPopUp: React.FC<IVideoLecturesPopUpProps> = ({
  setPopUp,
  courseVideoLectures,
  courseId,
}: IVideoLecturesPopUpProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: videoLectures } = useAppSelector(
    (state) => state.videoLectureReducer
  );

  useEffect(() => {
    dispatch(getCourseLectures(courseVideoLectures));
  }, []);

  return (
    <div
      className="videoLecturesPopUp"
      onClick={() => setPopUp(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="videoLecturesPopUp__container"
      >
        <div className="videoLecturesPopUp__playlist">
          <div className="videoLecturesPopUp__playlist_header">
            <h4>Видео Лекции</h4>

            <div onClick={() => setPopUp(false)}>
              <RxCrossCircled />
            </div>
          </div>
          <div className="videoLecturesPopUp__playlist_list">
            {videoLectures.length === 0 ? (
              <h6>Видео лекций нет</h6>
            ) : (
              videoLectures.map((lecture: IVideoLecture) => (
                <div
                  onClick={() =>
                    mergeVideoLecture(courseId, lecture.id)
                  }
                  key={lecture.id}
                  className="videoLecturesPopUp__playlist_item"
                >
                  <img
                    onClick={() => navigate(`/watch/${lecture.id}`)}
                    src="https://images.pexels.com/photos/2385044/pexels-photo-2385044.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="video-preview"
                  />
                  <div className="playlist__item">
                    <div className="playlist__item_title">
                      <h5>{lecture.title}</h5>
                    </div>
                    <p>{lecture.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLecturesPopUp;