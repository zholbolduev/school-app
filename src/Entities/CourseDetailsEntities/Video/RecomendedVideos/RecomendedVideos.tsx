import { VideoItem } from "../VideoItem";

const array = [1, 2];
export const RecomendedVideos = () => {
    return (
        <div>
            <h3>Рекомендованные видео</h3>
            {
                array.map(item => <VideoItem />)
            }
        </div>
    );
}