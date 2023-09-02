import {
  useAppDispatch,
  useAppSelector,
} from "../../Shared/hooks/reduxHooks";
import "./VideoPlayer.scss";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { getDetailedVideoLecture } from "./VideoPlayerActions";
import { useParams } from "react-router";
import { useEffect } from "react";

const VideoPlayer = () => {
  const dispatch = useAppDispatch();
  const { data: videoLecture } = useAppSelector(
    (state) => state.videoPlayerReducer
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailedVideoLecture(id));
  }, []);

  return (
    <div className="videoPlayer">
      <div className="videoPlayer__video">
        {/* <video controls>
          <source src={video} type="video/mp4" />
        </video> */}

        <iframe
          src={videoLecture.link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="video__information">
          <h3>{videoLecture.title}</h3>

          <div className="video__information_actions">
            <button>Пройти тест</button>

            <div className="information__action">
              <div>
                <AiOutlineHeart />
              </div>
              <div className="information__action">
                <AiOutlineShareAlt />
              </div>
            </div>
          </div>

          <p>{videoLecture.description}</p>
        </div>
      </div>

      <div className="videoPlayer__playlist"></div>
    </div>
  );
};

export default VideoPlayer;
