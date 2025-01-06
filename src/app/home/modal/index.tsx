"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ButtonChoose from "@/app/utils/ButtonChoose";

export default function MusicModal() {
  const [modalShow, setModalShow] = useState(true);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalShow && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [modalShow]);

  const closeModal = () => {
    dialogRef.current?.close(); // Tutup modal
    setModalShow(false); // Ubah state untuk menghilangkan modal dan overlay
  };

  const playAudio = () => {
    const audio = new Audio("/music/music.mp3");
    audio.play();
    audio.loop = true;
  };

  return (
    <>
      {modalShow && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Durasi lebih lama untuk efek retro
        >
          <motion.dialog
            className="nes-dialog bg-white p-6 rounded shadow-lg z-60"
            ref={dialogRef}
            initial={{ opacity: 0, y: -100 }} // Mulai dari posisi atas
            animate={{ opacity: 1, y: 0 }} // Gerakan ke posisi normal
            exit={{ opacity: 0, y: -100 }} // Kembali ke atas saat ditutup
            transition={{ duration: 1.5, ease: "easeInOut" }} // Durasi lebih lama untuk efek retro
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
                    e.preventDefault(); // Prevent form submission
                    closeModal();
                  }}
                >
                  Music Off
                </button>
                <button
                  className="nes-btn is-primary"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent form submission
                    closeModal();
                    ButtonChoose();
                    playAudio();
                  }}
                >
                  Music On
                </button>
              </menu>
            </form>
          </motion.dialog>
        </motion.div>
      )}
    </>
  );
}
