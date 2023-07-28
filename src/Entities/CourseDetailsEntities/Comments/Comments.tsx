import { WriteComment } from "./WriteComment";
import './Comments.scss';


export const Comments = () => {
    return (
        <div className="commentsContainer">
            <h2>Комментарии</h2>
            <WriteComment />
        </div>
    );
}