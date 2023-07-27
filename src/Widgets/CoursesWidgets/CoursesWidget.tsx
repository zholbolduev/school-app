import { FreeCourseCard } from "../../Entities/Courses/Cards/FreeCards/FreeCourseCard";
// import { SearchForm } from "../../Entities/Courses/Search/SearchForm";
import "./CoursesWidget.scss";

export const CoursesWidget = () => {
  return (
    <div className="freeCourseWidget">
      {/* <SearchForm /> */}

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus
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
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                  8 часов в день
                </ol>
                <ol>
                  {" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                  5 дней в неделю
                </ol>
                <ol>
                  {" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                  40 часов в неделю
                </ol>
                <ol>
                  {" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                  10:00-18:00
                </ol>
                <ol>
                  {" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                  Продолжительность-4 месяца
                </ol>
                <ol>
                  {" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                  Онлайн стажировка
                </ol>
                <ol>
                  {" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
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
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                </ol>
                <ol>
                  5 дней в неделю{" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                </ol>
                <ol>
                  40 часов в неделю{" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                </ol>
                <ol>
                  10:00-18:00{" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                </ol>
                <ol>
                  Продолжительность-4 месяца{" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                </ol>
                <ol>
                  Онлайн стажировка{" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
                    alt=""
                  />
                </ol>
                <ol>
                  JavaScript/Python{" "}
                  <img
                    className="icon"
                    src="/src/Widgets/CoursesWidgets/photo/Check Circle.png"
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
          <FreeCourseCard />
        </header>
      </div>
    </div>
  );
};
