import React from "react";
import CourseCard from "../../../Entities/Cards/CourseCard";
import "./FreeCourseList.scss";

const FreeCoursesList: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "JS",
      description: "Interpersonal skills - work better with others!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU",
      price: "300",
      type: "paid",
    },
    {
      id: 2,
      title: "JS",
      description: "Interpersonal skills - work better with others!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU",
      price: "300",
      type: "paid",
    },
    {
      id: 3,
      title: "JS",
      description: "Interpersonal skills - work better with others!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtME2Ho74uhChIuase5oqeJujVV-wmBEAWAg&usqp=CAU",
      price: "300",
      type: "paid",
    },
  ];
  return (
    <div className="freeCourseList">
      <h2>Бесплатные курсы</h2>
      <div className="freeCourseList__wrapper">
        {cards.map((card) => (
          <CourseCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FreeCoursesList;
