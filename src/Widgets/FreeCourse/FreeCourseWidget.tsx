import { SearchForm } from "../../Entities/Search/SearchForm";
import { FreeCourseList } from "./FreeCourseList/FreeCourseList";
import "./FreeCourseWidget.scss";

export const FreeCourseWidget = () => {
    return (
        <div className="freeCourseWidget">
            <SearchForm />
            <FreeCourseList />
        </div>
    );
}