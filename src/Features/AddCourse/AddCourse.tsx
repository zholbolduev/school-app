import { useState } from "react";
import "./AddCourse.scss";

const AddCourse = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [video, setVideo] = useState<string>("");

  return (
    <div className="addCourse">
      <div className="addCourse__wrapper">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          type="text"
          placeholder="description"
        />
        <select>
          <option value="free">free</option>
          <option value="paid">paid</option>
        </select>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          type="text"
          placeholder="text-lection"
        />
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVideo(e.target.value)
          }
          type="text"
          placeholder="video"
        />
      </div>
    </div>
  );
};

export default AddCourse;
