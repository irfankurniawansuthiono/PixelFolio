"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { audioPrefixAtom } from "@/app/lib/jotai";

export default function MusicModal() {
  const [modalShow, setModalShow] = useState(true);
  const [audioPrefix, setAudioPrefix] = useAtom(audioPrefixAtom);
  const [isPlaying, setIsPlaying] = useState(false); // State untuk toggle musik
  const dialogRef = useRef<HTMLDialogElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Referensi audio

  useEffect(() => {
    if (modalShow && dialogRef.current) {
      dialogRef.current.showModal();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [modalShow]);

  const closeModal = () => {
    dialogRef.current?.close();
    setModalShow(false);
  };

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/music.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setAudioPrefix(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setAudioPrefix(true);
    }
  };

  return (
    <>
      {/* Tombol Toggle Musik */}
      <div className="fixed top-4 right-4 z-50">
        <button
          className={`nes-btn ${isPlaying ? "is-warning" : "is-primary"}`}
          onClick={toggleAudio}
        >
          {isPlaying ? "Music Off" : "Music On"}
        </button>
      </div>

      {/* Modal */}
      {modalShow && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.dialog
            className="nes-dialog bg-white p-6 rounded shadow-lg z-60"
            ref={dialogRef}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <form method="dialog">
              <p className="title">Enjoy a better experience with music turned on!</p>
              <p className="is-warning nes-text">
                Music by{" "}
                <a href="https://pixabay.com/id/users/retrosunrise-45485696/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=233568">
                  RetroSunrise
                </a>{" "}
                from{" "}
                <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=233568">
                  Pixabay
                </a>
              </p>
              <menu className="dialog-menu flex gap-2 justify-end">
                <button
                  className="nes-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}
                >
                  Close
                </button>
              </menu>
            </form>
          </motion.dialog>
        </motion.div>
      )}
    </>
  );
}
