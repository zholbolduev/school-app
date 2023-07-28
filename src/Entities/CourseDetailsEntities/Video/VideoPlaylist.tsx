import { VideoItem } from "./VideoItem"

const array = [1, 2, 3, 4];
export const VideoPlaylist = () => {
    return (
        <div>
            <h3>Другие видео курса</h3>
            <div>
                {
                    array.map(item => <VideoItem />)
                }
            </div>
        </div>
    )
}