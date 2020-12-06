import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  setIsPlaying,
  isPlaying,
  songInfo,
  setSongInfo,
  currentSong,
}) => {
  // Ref ( used to acces html tags (<==> const ele = document.getelementby...))
  const audioRef = useRef(null);
  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const timeUpdateHandler = (e) => {
    let current = e.target.currentTime;
    const duration = e.target.duration;
    // calculate Percentage
    const rounderCurrent = Math.round(current);
    const rounderDuration = Math.round(duration);
    const roundedAnimationPercentage = Math.round(
      (rounderCurrent / rounderDuration) * 100
    );

    if (current === duration) {
      setIsPlaying(!isPlaying);
      current = 0;
    }
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: roundedAnimationPercentage,
      rotationDegree: (current * 360 * 10) / duration,
    });
  };
  const dragHandler = (e) => {
    const current = e.target.value;
    audioRef.current.currentTime = current;
    setSongInfo({ ...songInfo, currentTime: current });
  };
  // State

  // Helpers
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to left, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div
            style={{
              transform: `translateX(${songInfo.animationPercentage}%)`,
            }}
            className="animate-track"
          ></div>
        </div>
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          icon={faChevronCircleLeft}
          size="2x"
          color={currentSong.color[1]}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faChevronCircleRight}
          size="2x"
          color={currentSong.color[0]}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};
export default Player;
