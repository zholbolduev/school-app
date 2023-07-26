import { SearchForm } from "../../Entities/Search/SearchForm";
import { FreeCourseList } from "./FreeCoursesList/FreeCoursesList";
import "./FreeCourseWidget.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../App/rootStore";
// import { useEffect } from "react";
// import { fetchCourse } from "./PaidCourseSlice/PaidCourseSlice";

const PaidCoursePage = () => {
  const courseId = 123;

  const course = useSelector((state: RootState) => state.course?.data);
  const loading = useSelector((state: RootState) => state.course?.loading);
  const error = useSelector((state: RootState) => state.course?.error);
  const dispatch = useDispatch();

  // useEffect(
  //   () => {
  //     dispatch(fetchCourse(courseId ? courseId : null));
  //   },
  //   [dispatch] /*courseId */
  // );

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }


export const FreeCourseWidget = () => {
  return (
    <div className="freeCourseWidget">
      <SearchForm />
      <FreeCourseList />

      <div>
      <nav className="nav">
        <div>
          <img
            width={150}
            className="logo"
            src="/src/Pages/Courses/PaidCoursePage/photo/Makers-logo.png"
            alt="Wait"
          />
        </div>
        <div>
          <input className="search" type="text" placeholder="placeholder" />
        </div>
      </nav>

      {/* ---------------------------------------NAVBAAAAAAAR------------------------------ */}

      <header>
        <div className="inf">
          <div className="onetext">
            Программируй свое будущее с нашими онлайн курсами! Приступить к
            урокам
          </div>
          <div className="twotext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus
          </div>
          <div>
            <button className="btn">Записаться</button>
          </div>
        </div>

        {/* -------------------------------BLACK BLOOOOCK---------------------------------- */}

        <div className="boxs">
          <div className="box">
            <h1 className="name">Дневной формат</h1>
            <div className="horizontal-line"></div>

            <ul className="det">
              <ol>
                {" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
                8 часов в день
              </ol>
              <ol>
                {" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
                5 дней в неделю
              </ol>
              <ol>
                {" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
                40 часов в неделю
              </ol>
              <ol>
                {" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
                10:00-18:00
              </ol>
              <ol>
                {" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
                Продолжительность-4 месяца
              </ol>
              <ol>
                {" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
                Онлайн стажировка
              </ol>
              <ol>
                {" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
                JavaScript/Python
              </ol>
            </ul>
          </div>
          <div className="box2">
            <h1 className="name2">Вечерний формат</h1>
            <div className="horizontal-line"></div>

            <ul className="det">
              <ol>
                8 часов в день{" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
              </ol>
              <ol>
                5 дней в неделю{" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
              </ol>
              <ol>
                40 часов в неделю{" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
              </ol>
              <ol>
                10:00-18:00{" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
              </ol>
              <ol>
                Продолжительность-4 месяца{" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
              </ol>
              <ol>
                Онлайн стажировка{" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
              </ol>
              <ol>
                JavaScript/Python{" "}
                <img
                  className="icon"
                  src="/src/Pages/Courses/PaidCoursePage/photo/Check Circle.png"
                  alt=""
                />
              </ol>
            </ul>
          </div>
        </div>

        {/* ----------------------BOX END------------- */}

        <div className="button">
          <div>
            <img
              src="/src/Pages/Courses/PaidCoursePage/photo/Accent.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <button className="click">Бесплатные</button>
            <button className="click2">Платные</button>
          </div>
          <div>
            {" "}
            <img
              src="/src/Pages/Courses/PaidCoursePage/photo/Accent (1).png"
              alt=""
            />
          </div>
        </div>
      </header>
      {/* <div style={{ backgroundColor: "red" }}>PaidCoursePage</div>
      {course && (
        <div>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      )} */}
    </div>
    </div>
  );
};

