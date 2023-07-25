import './Videos.scss';

export const Video = () => {
    return (
        <div className='video-container'>
            {/* <video className="mainVideo" controls>
                <source src="https://www.youtube.com/watch?v=Od5H_CiU2vM&ab_channel=UlbiTV" type="video/mp4"/>
            </video> */}
            <iframe 
                src="https://www.youtube.com/embed/9inx3szoqTU" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                className='mainVideo'
                allowFullScreen
            >
            </iframe>
        </div>
    );
}