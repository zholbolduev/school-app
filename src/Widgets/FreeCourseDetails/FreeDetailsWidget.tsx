import { Video } from "../../Entities/Video/Video";
import { VideoPlaylist } from "../../Entities/Video/VideoPlaylist";
import { TestButton } from "../../Shared/Buttons/TestButton";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface CourseData {
  name: string;
  description: string;
  duration: string;
  videos: number;
  start: string;
  price: number;
}

export const FreeDetailsWidget = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     axios
  //       .get(`https://example-api.com/courses/${courseId}`)
  //       .then((response) => {
  //         setCourse(response.data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError("Error fetching course details");
  //         setLoading(false);
  //       });
  //   }, [courseId]);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }

  //   if (!course) {
  //     return null;
  //   }

  return (
    <div>
      <h1>Название курса</h1>
      <Video />
      <VideoPlaylist />
      <TestButton />

      <div>
        <h1>fdofodf</h1>
        {/* <h2>{course.name}</h2>
        <p>{course.description}</p>
        <p>Duration: {course.duration}</p>
        <p>Videos: {course.videos}</p>
        <p>Start Date: {course.start}</p>
        <p>Price: $ {course.price}</p> */}
      </div>
    </div>
  );
};
