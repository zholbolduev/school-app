import { Video } from "../../Entities/CourseDetailsEntities/Video/MainVideoPlayer";
import { VideoPlaylist } from "../../Entities/CourseDetailsEntities/Video/VideoPlaylist";
import { TestButton } from "../../Shared/Buttons/TestButton";
import { useAppSelector } from "../../Shared/hooks/reduxHooks";
import { useState, useEffect } from 'react'; 
import { ICourseData } from "./DetailedCourseSlice";
import './DetailsWidget.scss';
import { Description } from "../../Entities/CourseDetailsEntities/Description/Description";
import { RecomendedVideos } from "../../Entities/CourseDetailsEntities/Video/RecomendedVideos/RecomendedVideos";
import { Comments } from "../../Entities/CourseDetailsEntities/Comments/Comments";
import { Link } from "react-router-dom";

export const FreeDetailsWidget = () => {

    const [courseData, setCourseData] = useState<ICourseData | null>(null);

    const data = useAppSelector(state => state.detailedCourseReducer.course);

    useEffect(() => {
        setCourseData(data);
    }, [data]);

    console.log(courseData);
    
    return (
        <div className="details-widget">
            <h1>{courseData !== null && courseData.name}</h1>
            <div className="detailsVidAndPlaylistContainer" >
                <Video />
                <div className="detailsPlaylist">
                    <h3>Другие видео курса</h3>
                    <VideoPlaylist />
                </div>
            </div>
            <div className="descripAndRecoms">
                <div className="detailsText">
                    <Description description={courseData?.description} />
                    <hr />
                    <div className="details-buttons">
                        <Link className="details-link" to={'/text-lecture'}>Текстовая лекция</Link>
                        <TestButton />
                    </div>
                    <Comments />
                </div>
                <div className="recomendedVideos">
                    <h3>Рекомендации</h3>
                    <RecomendedVideos />
                </div>
            </div>
        </div>
    );
}