import { Video } from "../../Entities/CourseDetailsEntities/Video/Video";
import { VideoPlaylist } from "../../Entities/CourseDetailsEntities/Video/VideoPlaylist";
import { TestButton } from "../../Shared/Buttons/TestButton";

export const FreeDetailsWidget = () => {

    return (
        <div>
            <h1>Название курса</h1>
            <Video />
            <VideoPlaylist />
            <TestButton />
        </div>
    );
}