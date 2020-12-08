import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  currentSong,
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
}) => {
  return (
    <div className="library">
      <h2> Library </h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            id={song.id}
            songs={songs}
            setSongs={setSongs}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            currentSong={currentSong}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
