import { Video } from "../../Entities/CourseDetailsEntities/Video/MainVideoPlayer";
import { VideoPlaylist } from "../../Entities/CourseDetailsEntities/Video/VideoPlaylist";
import { PlaylistButton } from "../../Shared/Buttons/PlaylistButton";
import { RecomendedButton } from "../../Shared/Buttons/RecomendedButton";
import { TestButton } from "../../Shared/Buttons/TestButton";
import { useAppSelector } from "../../Shared/hooks/reduxHooks";
import { useState, useEffect } from 'react'; 
import { ICourseData } from "./DetailedCourseSlice";
import './DetailsWidget.scss';
import { Description } from "../../Entities/CourseDetailsEntities/Description/Description";
import { RecomendedVideos } from "../../Entities/CourseDetailsEntities/Video/RecomendedVideos/RecomendedVideos";
import { Comments } from "../../Entities/CourseDetailsEntities/Comments/Comments";

export const FreeDetailsWidget = () => {

    const [courseData, setCourseData] = useState<ICourseData | null>(null);
    const [selectButton, setSelectButton] = useState(true);

    const data = useAppSelector(state => state.detailedCourseReducer.course);

    useEffect(() => {
        setCourseData(data);
    }, [data]);

    console.log(courseData);

    const handleSelectedButton = () => {
        setSelectButton(!selectButton);
    }

    
    return (
        <div className="details-widget">
            <h1>{courseData !== null && courseData.name}</h1>
            <div className="detailsVidAndPlaylistContainer" >
                <Video />
                <div className="detailsPlaylist">
                    <div className="detailsPlaylistButtons">
                        <PlaylistButton selected={selectButton} onClick={handleSelectedButton} />
                        <RecomendedButton selected={selectButton} onClick={handleSelectedButton} />
                    </div>
                    {
                        selectButton ?
                        <VideoPlaylist /> :
                        <RecomendedVideos />
                    }
                </div>
            </div>
            <Description description={courseData?.description} />
            <TestButton />
            <Comments />
        </div>
    );
}