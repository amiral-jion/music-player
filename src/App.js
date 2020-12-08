import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import "./styles/app.scss";
import data from "./util";

function App() {
  // Ref ( used to acces html tags (<==> const ele = document.getelementby...))
  const audioRef = useRef(null);
  //Handlers
  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate Percentage
    const rounderCurrent = Math.round(current);
    const rounderDuration = Math.round(duration);
    let roundedAnimationPercentage = Math.round(
      (rounderCurrent / rounderDuration) * 100
    );

    if (current === duration) {
      setIsPlaying(!isPlaying);
      current = 0;
      roundedAnimationPercentage = 0;
    }
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: roundedAnimationPercentage,
      rotationDegree: (current * 360 * 10) / duration,
    });
  };

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[5]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    rotationDegree: 0,
  });

  return (
    <div className="App">
      <Song songInfo={songInfo} currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
