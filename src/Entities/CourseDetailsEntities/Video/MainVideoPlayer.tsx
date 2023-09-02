import "./Videos.scss";

export const Video = () => {
  return (
    <div className="video-container">
      {/* <video className="mainVideo" controls>
                <source src="https://www.youtube.com/watch?v=Od5H_CiU2vM&ab_channel=UlbiTV" type="video/mp4"/>
            </video> */}
      <iframe
        src="https://www.youtube.com/embed/9inx3szoqTU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="mainVideo"
        allowFullScreen
      ></iframe>

      <div className="freeDetails__video">
        <video controls>
          <source src={video} type="video/mp4" />
        </video>

        <div className="video__information">
          <h3>{freeCourse.name}</h3>

          <p>{freeCourse.description}</p>
        </div>
      </div>

      <div className="freeDetails__playlists"></div>
    </div>
  );
};
