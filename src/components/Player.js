import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import playAudio from "./util";

const Player = ({
  setIsPlaying,
  isPlaying,
  audioRef,
  songs,
  songInfo,
  setSongInfo,
  currentSong,
  setCurrentSong,
  setSongs,
}) => {
  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const dragHandler = (e) => {
    const current = e.target.value;
    audioRef.current.currentTime = current;
    setSongInfo({ ...songInfo, currentTime: current });
  };
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      currentIndex = currentIndex + 1;
      if (currentIndex >= songs.length) {
        currentIndex = 0;
      }
    } else {
      currentIndex = currentIndex - 1;
      if (currentIndex < 0) {
        currentIndex = songs.length - 1;
      }
    }
    setCurrentSong(songs[currentIndex]);
  };
  // State
  // Effect
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      }
      return {
        ...song,
        active: false,
      };
    });
    setSongs(newSongs);
    playAudio(isPlaying, audioRef);
  }, [currentSong]);
  // Helpers
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  return (
    <div className="player" onKeyDown={playSongHandler}>
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
            max={songInfo.duration || 0}
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
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("back")}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("forward")}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};
export default Player;
