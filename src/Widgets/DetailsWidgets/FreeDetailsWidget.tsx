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
                    <VideoPlaylist />
                </div>
            </div>
            <div className="descripAndRecoms">
                <div>
                    <Description description={courseData?.description} />
                    <Link className="details-link" to={'#'}>читать текстовцю лекцию</Link>
                </div>
                <RecomendedVideos />
            </div>
            <TestButton />
            <Comments />
        </div>
    );
}