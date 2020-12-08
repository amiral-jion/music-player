import React from "react";

const Song = ({ currentSong, songInfo }) => {
  return (
    <div className="song-container">
      <img
        style={{
          transform: `rotate(${songInfo.rotationDegree}deg)`,
          transition: "transform 1s cubic-bezier(0.6, 0.6, 0.59, 0.61) 0s ",
        }}
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};
export default Song;
