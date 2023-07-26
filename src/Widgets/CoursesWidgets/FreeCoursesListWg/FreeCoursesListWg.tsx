import { AppDispatch } from "../../../App/rootStore";
import { CourseCard } from "../../../Entities/Courses/Cards/FreeCards/CourseCard";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Shared/hooks/reduxHooks";

export const FreeCourseList = () => {
  // const selector = useAppSelector(state => state.freeCourseReducer);
  // console.log(selector.courses)

  //   const freeCourses = [
  //     {
  //       title: "Физика",
  //       duration: "1 месяц",
  //       videos: 8,
  //       isFavorite: false,
  //       id: "/physics",
  //     },
  //     {
  //       title: "История",
  //       duration: "2 месяца",
  //       videos: 8,
  //       isFavorite: false,
  //       id: "/history",
  //     },
  //   ];

  return (
    <div className="freeCourseList">
      HEllo
      {/* {freeCourses.map((card) => {
        return (
          <CourseCard
            title={card.title}
            duration={card.duration}
            videos={card.videos}
            isFavorite={card.isFavorite}
            id={card.id}
          />
        );
      })} */}
    </div>
  );
};
