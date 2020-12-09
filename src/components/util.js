const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playingPromise = audioRef.current.play();
    if (isPlaying !== undefined) {
      playingPromise.then((audio) => audioRef.current.play());
    }
  }
};
export default playAudio;
