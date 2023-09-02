import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/reduxHooks";
import "./CreateVideoLecture.scss";
import { useState } from "react";
import { postVideoLecture } from "./PostVideoLecture";

const CreateVideoLecture = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const dispatch = useAppDispatch();
  const { success, error } = useAppSelector(
    (state) => state.videoLectureReducer
  );

  return (
    <div className="createVideoLecture">
      <div className="createVideoLecture__wrapper">
        <div className="createVideoLecture__input">
          <p>Название</p>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <div className="createVideoLecture__input">
          <p>Описание курса</p>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>

        <div className="createVideoLecture__input">
          <p>Ссылка(embed)</p>
          <input
            onChange={(e) => setLink(e.target.value)}
            type="text"
          />
        </div>
        <button
          onClick={() =>
            dispatch(postVideoLecture(title, description, link))
          }
        >
          Создать курс
        </button>
        <p>
          {success} {error}
        </p>
      </div>
    </div>
  );
};

export default CreateVideoLecture;
