import { VideoItem } from "./VideoItem"

const array = [1, 2, 3, 4];
export const VideoPlaylist = () => {
    return (
        <div className="videoPlaylist">
            <div>
                {
                    array.map(item => <VideoItem key={item} />)
                }
            </div>
        </div>
    )
}