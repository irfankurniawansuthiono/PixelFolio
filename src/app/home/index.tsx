"use client"
import { motion } from 'framer-motion';
import SocialMediaButton from "./SocialMediaButton";
import ButtonChoose from '../utils/ButtonChoose';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Header dengan animasi Slide Up */}
      <motion.div
        className="w-full flex flex-col justify-center items-center gap-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="animate-pulse nes-text is-primary text-3xl md:text-5xl font-bold"
        >
          Welcome to My Quest!
        </motion.h1>
        <motion.h2
          className="nes-text is-warning text-xs md:text-lg"
        >
          Choose Your Path to Begin the Adventure
        </motion.h2>
      </motion.div>

      {/* Menu Buttons dengan animasi Slide Up */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <ul className="flex flex-col items-center gap-6">
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <button className="nes-btn is-warning is-large px-6 py-3" onClick={ButtonChoose}>
              <span className="nes-text text-sm">Hero&apos;s Backstory</span>
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          >
            <button className="nes-btn is-success is-large px-6 py-3"onClick={ButtonChoose}>
              <span className="nes-text text-sm">Achievements</span>
            </button>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <button className="nes-btn is-error is-large px-6 py-3" onClick={ButtonChoose}>
              <span className="nes-text text-sm">Power-Ups</span>
            </button>
          </motion.li>
        </ul>
      </motion.div>

      {/* Social Media Buttons on larger screens */}
      <div className="w-full h-full justify-center mt-8">
        <SocialMediaButton />
      </div>
    </div>
  );
}
