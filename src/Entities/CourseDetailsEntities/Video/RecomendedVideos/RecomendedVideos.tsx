import { VideoItem } from "../VideoItem";

const array = [1, 2, 3, 4, 5];
export const RecomendedVideos = () => {
    return (
        <div className="videoRecomendation">
            {
                array.map(item => <VideoItem />)
            }
        </div>
    );
}