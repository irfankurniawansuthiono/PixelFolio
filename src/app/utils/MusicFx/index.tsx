"use client";

// Atom untuk melacak status audio

export const MusicOff = (audioRef: React.MutableRefObject<HTMLAudioElement | null>, setAudioPrefix: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // Reset waktu audio
    setAudioPrefix(false); // Update atom
  }
};

export const MusicOn = (audioRef: React.MutableRefObject<HTMLAudioElement | null>, setAudioPrefix: React.Dispatch<React.SetStateAction<boolean>>) => {

  if (!audioRef.current) {
    audioRef.current = new Audio("/music/music.mp3");
    audioRef.current.loop = true;
  }
  audioRef.current.play();
  setAudioPrefix(true); // Update atom
};
