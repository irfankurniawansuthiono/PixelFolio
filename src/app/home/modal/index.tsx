"use client";

import { useState, useRef, useEffect } from "react";

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
  }
  return (
    <>
      {modalShow && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <dialog
            className="nes-dialog bg-white p-6 rounded shadow-lg z-60"
            ref={dialogRef}
          >
            <form method="dialog">
              <p className="title">Dialog</p>
              <p>Enjoy a better experience with music turned on!</p>
              <p className="is-warning nes-text">Music by <a href="https://pixabay.com/id/users/retrosunrise-45485696/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=233568">RetroSunrise</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=233568">Pixabay</a></p>
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
                    playAudio();
                  }}
                >
                  Turn On Music
                </button>
              </menu>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
}
