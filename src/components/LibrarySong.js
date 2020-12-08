import React from "react";

const LibrarySong = ({
  audioRef,
  id,
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
}) => {
  const changeCurrentSongHandler = () => {
    setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
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
    if (isPlaying) {
      const playingPromise = audioRef.current.play();
      if (isPlaying !== undefined) {
        playingPromise.then((audio) => audioRef.current.play());
      }
    }
  };

  return (
    <div
      onClick={changeCurrentSongHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
