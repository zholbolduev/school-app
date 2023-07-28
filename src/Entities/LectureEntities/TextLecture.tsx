import { FC } from "react";
import { ILecture } from "./types";
import './TextLecture.scss';

const TextLecture: FC<ILecture> = ({title, text}) => {
    return (
        <div className="lectureText">
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}

export default TextLecture;