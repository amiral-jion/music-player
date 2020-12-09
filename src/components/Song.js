import React from "react";

const Song = ({ currentSong, songInfo }) => {
  return (
    <div className="song-container">
      <img
        style={{
          transform: `rotate(${songInfo.rotationDegree}deg)`,
          transition: "transform 1s ease-out ",
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
