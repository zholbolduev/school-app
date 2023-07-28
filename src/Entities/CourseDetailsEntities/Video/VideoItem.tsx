import './Videos.scss';

export const VideoItem = () => {
    
    return (
        <div className="videoCard">
            <button>
                <img 
                    src="https://img.youtube.com/vi/GS7bnsn8zXw/maxresdefault.jpg" 
                    alt="Video Thumbnail"
                    width={150} />
                <h3>Название видео</h3>
            </button>
        </div>
    );
}